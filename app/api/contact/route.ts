import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const body = await req.formData()

    const name = body.get('name');
    const email = body.get('email');
    const message = body.get('message');
  
    if (!name || !email || !message) {
      return new Response('Missing required form data', { status: 400 });
    }

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass:  process.env.SMTP_PASS
        }
    })

    let mailOptions = {
        from: 'owen@owenstack.github.io',
        to: 'jenukohaefobi@gmail.com',
        subject: 'Contact Form',
        text: `New Form Submission: \n\nOne ${name} with email ${email} dropped a message whose contents are: \n\n${message}`
    }

    try {
        const info = await new Promise<nodemailer.SentMessageInfo>((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(info)
                }
            })
        })
        console.log('Email sent: ', info.response)
        return new Response('Email Sent Succesfully', {status: 200})
    } catch (error) {
        console.error(error)
        return new Response(`Error: ${error}`, {status: 500})
    }
}