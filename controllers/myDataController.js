import axios from 'axios';
import { getSession } from 'next-auth/react';

const fetchMyData = async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users?id=${session.user.id}`
    );

    res.status(200).json({
      success: true,
      user: data,
    });
  } else {
    res.status(401).send({
      success: false,
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};

export { fetchMyData };
