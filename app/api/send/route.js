import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { recepientEmail, previewFile, user } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail ID
        pass: process.env.EMAIL_PASS, // App password (not your Gmail password)
      },
    });

    const mailOptions = {
      from: '"FileShare" <roshan.hotmail7@gmail.com>',
      to: recepientEmail,
      subject: user?.fullName + " shared file with You.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FileShare Email</title>
    <style>
        body {
            display: flex;
            justify-content: start;
            align-items: center;
            height: 100vh;
            background-color: white;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 640px;
            background-color: white;
            border: 2px solid #365CCE;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
        }
        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px;
        }
        .header img {
            width: 80px;
            height: 80px;
        }
        .divider {
            width: 100%;
            height: 2px;
            background-color: #365CCE;
            margin: 10px 0;
        }
        .highlight {
            position: relative;
            display: inline-block;
        }
        .highlight div {
            height: 3px;
            width: 80px;
            background-color: #365CCE;
            position: absolute;
            left: 0;
            bottom: -5px;
        }
        .file-details h3 {
            margin-top: 10px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            font-size: 14px;
            font-weight: bold;
            color: white;
            background-color: #ff6a00;
            border-radius: 5px;
            text-decoration: none;
            transition: 0.3s;
        }
        .button:hover {
            background-color: #ff4500;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header" style="display: flex; justify-content: center; align-items: center; gap: 20px;">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Abstract-Logo-by-Friendesign-Acongraphic-14-580x386.jpg" alt="FileShare Logo">
            <h1>FileShare</h1>
        </header>
        <div class="divider"></div>
        
        <main>
            <h3>From: <strong>${user?.fullName}</strong>,</h3>
            <p>I hope you're doing well. I'm sharing a file with you. Here are the details:</p>
            <div class="file-details" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <h3>File Name: ${previewFile?.fileName}</h3>
                <h3>File Type: ${previewFile?.fileType}</h3>
                <h3>File Size: ${(previewFile?.fileSize / 1024 / 1024).toFixed(
                  2
                )}MB</span></h3>
            </div>
            <a class="button" href=${
              "http://localhost:3000/f/" + previewFile?.id
            }>Download File</a>
            <p>Thank you, <br> ${user?.fullName}</p>
        </main>
    </div>
</body>
</html>
`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
