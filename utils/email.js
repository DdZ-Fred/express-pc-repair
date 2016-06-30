import env from '../env';

/**
 * Returns an email object
 * @param  {String} name    [Client name]
 * @param  {String} email   [Client email]
 * @param  {String} message [Client message]
 * @return {Object}         [Simple object that represents an email]
 */
export function createEmail(name, email, message) {
  const text = `Hello Fred!\n
    My name is ${name} and i'm interested in your services\n
    ${message}`;

  return {
    from: `${name} <${email}>`,
    to: env.GMAIL_EMAIL,
    subject: 'Contact form',
    text,
  };
}

/**
 * [Returns an Nodemailer transporter]
 * @param  {Object} nodemailer [Nodemailer dependency/import]
 * @return {Object}            [Nodemailer transporter object]
 */
export function getTransporter(nodemailer) {
  return nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: env.MAILGUN_SMTP_LOGIN,
      pass: env.MAILGUN_PASSWORD,
    },
  });
}
