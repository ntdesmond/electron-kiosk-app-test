import { createTransport } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/smtp-pool';

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USERNAME,
  SMTP_PASSWORD,
  SMTP_SENDER_NAME,
  SMTP_RECIPIENT,
} = process.env;

const missingValues = Object.entries(
  {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USERNAME,
    SMTP_PASSWORD,
    SMTP_SENDER_NAME,
    SMTP_RECIPIENT,
  },
).reduce(
  (missing, [key, value]) => {
    if (value === undefined) {
      missing.push(key);
    }
    return missing;
  },
  <string[]>[],
);

const transporter = createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 0,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

export default async (subject: string, body: string) => {
  if (missingValues.length > 0) {
    throw new Error(`Missing values: ${missingValues.join(', ')}`);
  }

  const mailOptions: MailOptions = {
    from: `<${SMTP_USERNAME}> ${SMTP_SENDER_NAME}`,
    to: SMTP_RECIPIENT,
    html: body,
    subject,
  };

  return transporter.sendMail(mailOptions).then(() => {});
};
