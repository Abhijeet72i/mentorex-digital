import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      businessName,
      email,
      phone,
      country,
      businessType,
      timeline,
      projectDetails,
    } = req.body;

    if (!name || !businessName || !email || !projectDetails) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "MentorEx Digital <onboarding@resend.dev>",
      to: ["operations@mentorex.in"],
      replyTo: email,

      subject: `New MentorEx Digital Project Request — ${businessName}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          background:#f5f5f5;
          padding:30px;
        ">

          <div style="
            max-width:700px;
            margin:auto;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            border:1px solid #e5e5e5;
          ">

            <div style="
              background:#111111;
              padding:25px 30px;
              color:#ffffff;
            ">
              <h1 style="margin:0;font-size:24px;">
                New Project Request
              </h1>

              <p style="
                margin:8px 0 0;
                color:#aaaaaa;
              ">
                MentorEx Digital
              </p>
            </div>

            <div style="padding:30px;">

              <h2 style="font-size:18px;">
                Client Information
              </h2>

              <table style="
                width:100%;
                border-collapse:collapse;
              ">

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">
                    Name
                  </td>
                  <td style="padding:10px 0;">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">
                    Business Name
                  </td>
                  <td style="padding:10px 0;">
                    ${businessName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">
                    Email
                  </td>
                  <td style="padding:10px 0;">
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">
                    Phone
                  </td>
                  <td style="padding:10px 0;">
                    ${phone || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">
                    Country
                  </td>
                  <td style="padding:10px 0;">
                    ${country || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">
                    Business Type
                  </td>
                  <td style="padding:10px 0;">
                    ${businessType || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">
                    Target Launch
                  </td>
                  <td style="padding:10px 0;">
                    ${timeline || "Not provided"}
                  </td>
                </tr>

              </table>

              <h2 style="
                font-size:18px;
                margin-top:30px;
              ">
                Project Details & Goals
              </h2>

              <div style="
                background:#f7f7f7;
                border-radius:8px;
                padding:20px;
                line-height:1.6;
                white-space:pre-wrap;
              ">
                ${projectDetails}
              </div>

              <div style="
                margin-top:30px;
                padding-top:20px;
                border-top:1px solid #eeeeee;
                color:#777777;
                font-size:13px;
              ">
                Submitted through mentorex.in
              </div>

            </div>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project request sent successfully!",
      data,
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}