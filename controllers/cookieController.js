const giveMeCookies = (req, res) => {
  res.setHeader('Set-Cookie', [
    'custom1=i_am_a_custom_cookie',
    'custom2=i_am_a_custom_cookie',
  ]);

  res.send(
    `<a href="/" style="background-image:url('https://res.cloudinary.com/sayyedcloud/image/upload/v1656009365/sayyed-img_lgwk2q.jpg'); position: absolute;top:0;left:0; width:100%; height:100%;object-fit:cover;"></a><p class="cookies" style="background-color:#000000a3; width:50%; margin:0 auto; padding: 60px 20px; color: white; font-weight: bold; text-align:center; line-height:26px; position:fixed; bottom: 40px; left: 50%; transform: translateX(-50%);">This site uses cookies namely <b>Custom1</b> and <b>Custom2</b>. By browsing you agree to and accept the cookie policy.
    </p>`
  );
};

export { giveMeCookies };
