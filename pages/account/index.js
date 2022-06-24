import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import {
  AUTHENTICATED,
  UNAUTHENTICATED,
} from '../../constants/sessionConstants';

import styles from '../../styles/Account.module.css';
import { getUserDetails } from '../../redux/actions/userActions';
import Toast from '../../components/Toast';
import { ERROR, SUCCESS } from '../../constants/globalConstants';
import ProfileCard from '../../components/ProfileCard';
import CustomButton from '../../components/CustomButton';

function Account() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, data: session } = useSession();
  const { loading, error, user } = useSelector((state) => state.getUserDetails);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (status === AUTHENTICATED) dispatch(getUserDetails());
    if (status === UNAUTHENTICATED) {
      //router.push('/account/login');
      setShowToast(true);
      const toastTimer = setTimeout(() => {
        router.push('/account/login');
      }, 1500);

      return () => clearTimeout(toastTimer);
    }
  }, [router, status, session, dispatch]);

  const signOutHandler = () => {
    signOut();
    router.push('/account/login');
  };

  if (showToast) {
    return (
      <React.Fragment>
        <Toast type={ERROR} text='Unauthorized access restricted' />
      </React.Fragment>
    );
  }

  if (status === AUTHENTICATED) {
    return (
      <>
        {loading ? (
          <Toast type={SUCCESS} text='loading...' />
        ) : error ? (
          <Toast type={ERROR} text={error} />
        ) : (
          <div className={styles.authorized_container}>
            <div className={styles.profile_container}>
              <div className={styles.decorator_box}>
                <div className={styles.decorator}></div>
              </div>
              <div className={styles.user_container}>
                <h1 className={styles.user_name}>{user.name}</h1>
              </div>
              <div className={styles.user_info}>
                <div className={styles.info}>
                  <p>
                    Username: <b>{user.username}</b>
                  </p>
                  <p>
                    {' '}
                    Email:
                    <a href={`mailto:${user.email}`}>
                      {' '}
                      <b>{user.email}</b>
                    </a>
                  </p>
                </div>
                <CustomButton onClick={signOutHandler}>Logout</CustomButton>
              </div>

              <div className={styles.card_holder}>
                <ProfileCard
                  title='User Information'
                  email={user.email}
                  text1={user.name}
                  text2={user.phone}
                  text3={user.website}
                  type='info'
                />
                {user.address && (
                  <ProfileCard
                    title='Address'
                    text1={`${user.address.suite ? user.address.suite : ''}, ${
                      user.address.street
                    },`}
                    text2={`${user.address.city}, ${user.address.zipcode}.`}
                    text3={`${user.address.geo.lat}, ${user.address.geo.lng}`}
                    type='address'
                  />
                )}
                {user.company && (
                  <ProfileCard
                    title='Business'
                    text1={user.company.name}
                    text2={user.company.catchPhrase}
                    text3={user.company.bs}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Account;
