const sendEmail = async (to, subject, text) => {
  console.log(`Sending email to ${to}: ${subject} - ${text}`);
};

module.exports = sendEmail;
