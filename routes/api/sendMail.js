const router = require("express").Router()
const nodemailer = require("nodemailer")
require('dotenv').config()
//const emailHTML = require("../../email")

router.post('/', function (req, res){
    console.log('req.body=',req.body)
    nodemailer.createTestAccount((err, account) => {
        // i recommend to collapse line 9
        const htmlEmail =  `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
              <!--[if !mso]><!-->
              <meta http-equiv="X-UA-Compatible" content="IE=Edge">
              <!--<![endif]-->
              <!--[if (gte mso 9)|(IE)]>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:AllowPNG/>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
              <!--[if (gte mso 9)|(IE)]>
          <style type="text/css">
            body {width: 600px;margin: 0 auto;}
            table {border-collapse: collapse;}
            table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
            img {-ms-interpolation-mode: bicubic;}
          </style>
        <![endif]-->
              <style type="text/css">
            body, p, div {
              font-family: trebuchet ms,helvetica,sans-serif;
              font-size: 14px;
            }
            body {
              color: #000000;
            }
            body a {
              color: #0055B8;
              text-decoration: none;
            }
            p { margin: 0; padding: 0; }
            table.wrapper {
              width:100% !important;
              table-layout: fixed;
              -webkit-font-smoothing: antialiased;
              -webkit-text-size-adjust: 100%;
              -moz-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            img.max-width {
              max-width: 100% !important;
            }
            .column.of-2 {
              width: 50%;
            }
            .column.of-3 {
              width: 33.333%;
            }
            .column.of-4 {
              width: 25%;
            }
            @media screen and (max-width:480px) {
              .preheader .rightColumnContent,
              .footer .rightColumnContent {
                text-align: left !important;
              }
              .preheader .rightColumnContent div,
              .preheader .rightColumnContent span,
              .footer .rightColumnContent div,
              .footer .rightColumnContent span {
                text-align: left !important;
              }
              .preheader .rightColumnContent,
              .preheader .leftColumnContent {
                font-size: 80% !important;
                padding: 5px 0;
              }
              table.wrapper-mobile {
                width: 100% !important;
                table-layout: fixed;
              }
              img.max-width {
                height: auto !important;
                max-width: 100% !important;
              }
              a.bulletproof-button {
                display: block !important;
                width: auto !important;
                font-size: 80%;
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .columns {
                width: 100% !important;
              }
              .column {
                display: block !important;
                width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
              .social-icon-column {
                display: inline-block !important;
              }
            }
          </style>
              <!--user entered Head Start-->
            
             <!--End Head user entered-->
            </head>
            <body>
              <center class="wrapper" data-link-color="#0055B8" data-body-style="font-size:14px; font-family:trebuchet ms,helvetica,sans-serif; color:#000000; background-color:#F2E291;">
                <div class="webkit">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#F2E291">
                    <tr>
                      <td valign="top" bgcolor="#F2E291" width="100%">
                        <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td width="100%">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td>
                                    <!--[if mso]>
            <center>
            <table><tr><td width="600">
          <![endif]-->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                              <tr>
                                                <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#F2E291" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
            <tr>
              <td role="module-content">
                <p>This is a reminder from Producky.</p>
              </td>
            </tr>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="4787" data-end-index="4925" data-muid="eBRaDmnRhcZU8CphJrrjCM" data-mc-module-version="2019-10-22">
              <tbody><tr data-start-index="4932" data-end-index="4936">
                <td style="padding:18px 0px 18px 0px; background-color:#f2e291; line-height:NaNpx;" height="100%" valign="top" bgcolor="#f2e291" data-start-index="4945" data-end-index="5088"><div><div style="font-family: inherit; text-align: right"><span style="font-size: 10px; font-family: verdana, geneva, sans-serif">Email not displaying correctly? </span><a href="{{weblink}}" data-start-index="5248" data-end-index="5268" target="_blank"><span style="color: #0055b8; font-size: 10px; font-family: verdana, geneva, sans-serif">View it</span></a><span style="font-size: 10px; font-family: verdana, geneva, sans-serif"> in your browser.</span></div><div></div></div></td>
              </tr>
            </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:0px 0px 0px 0px; background-color:#f7f7f7; box-sizing:border-box;" bgcolor="#e4f1f2" data-start-index="5511" data-end-index="5847">
              <tbody><tr role="module-content" data-start-index="5854" data-end-index="5880">
                <td height="100%" valign="top" data-start-index="5889" data-end-index="5920"><table width="300" style="width:300px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
              <tbody>
                <tr>
                  <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="6773" data-end-index="6913" data-muid="kTWSASqTSpaVrmQN9wXPiW">
              <tbody><tr data-start-index="6920" data-end-index="6924">
                <td style="font-size:6px; line-height:10px; background-color:#f7f7f7; padding:0px 0px 0px 0px;" valign="top" align="left" data-start-index="6933" data-end-index="7054">
                  <img class="max-width" width="300" src="http://cdn.mcauto-images-production.sendgrid.net/e8339f6be2b40dd0/5b485ead-7f51-4523-8078-f85bc6b06aed/367x102.png" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" data-start-index="7065" data-end-index="7324" data-proportionally-constrained="false" data-responsive="true">
                </td>
              </tr>
            </tbody></table></td>
                </tr>
              </tbody>
            </table><table width="300" style="width:300px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
              <tbody>
                <tr>
                  <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="social" align="undefined" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="8046" data-end-index="8204" data-muid="aLejMgSxEBSXrK93jVoTMd">
              <tbody data-start-index="8211" data-end-index="8218">
                <tr data-start-index="8227" data-end-index="8231">
                  <td valign="top" style="font-size:6px; line-height:10px; padding:29px 0px 29px 0px; background-color:#e4f1f2;" data-start-index="8242" data-end-index="8324" align="center">
                    <table align="center" data-start-index="8337" data-end-index="8362">
                      <tbody data-start-index="8377" data-end-index="8384"><tr align="center"><td style="padding: 0px 5px;" class="social-icon-column">
              <a role="social-icon-link" href="https://sleepy-retreat-90049.herokuapp.com/" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#3B579D; height:21px; width:21px;">
                <img role="social-icon" alt="Facebook" title="Facebook" src="https://marketing-image-production.s3.amazonaws.com/social/white/facebook.png" style="height:21px; width:21px;" height="21" width="21">
              </a>
            </td><td style="padding: 0px 5px;" class="social-icon-column">
              <a role="social-icon-link" href="https://sleepy-retreat-90049.herokuapp.com/" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block; background-color:#7AC4F7; height:21px; width:21px;">
                <img role="social-icon" alt="Twitter" title="Twitter" src="https://marketing-image-production.s3.amazonaws.com/social/white/twitter.png" style="height:21px; width:21px;" height="21" width="21">
              </a>
            </td><td style="padding: 0px 5px;" class="social-icon-column">
              <a role="social-icon-link" href="https://sleepy-retreat-90049.herokuapp.com/" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#7F4B30; height:21px; width:21px;">
                <img role="social-icon" alt="Instagram" title="Instagram" src="https://marketing-image-production.s3.amazonaws.com/social/white/instagram.png" style="height:21px; width:21px;" height="21" width="21">
              </a>
            </td><td style="padding: 0px 5px;" class="social-icon-column">
              <a role="social-icon-link" href="https://sleepy-retreat-90049.herokuapp.com/" target="_blank" alt="Pinterest" title="Pinterest" style="display:inline-block; background-color:#CB2027; height:21px; width:21px;">
                <img role="social-icon" alt="Pinterest" title="Pinterest" src="https://marketing-image-production.s3.amazonaws.com/social/white/pinterest.png" style="height:21px; width:21px;" height="21" width="21">
              </a>
            </td><td style="padding: 0px 5px;" class="social-icon-column">
              <a role="social-icon-link" href="https://sleepy-retreat-90049.herokuapp.com/" target="_blank" alt="LinkedIn" title="LinkedIn" style="display:inline-block; background-color:#0077B5; height:21px; width:21px;">
                <img role="social-icon" alt="LinkedIn" title="LinkedIn" src="https://marketing-image-production.s3.amazonaws.com/social/white/linkedin.png" style="height:21px; width:21px;" height="21" width="21">
              </a>
            </td></tr></tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table></td>
                </tr>
              </tbody>
            </table></td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b97dac3b-0f95-4154-9a21-5ae1514837fc">
            <tbody>
              <tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#F2E291">
                </td>
              </tr>
            </tbody>
          </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="8929" data-end-index="9069" data-muid="q474Ek34Y7QfbLCmneBcKz">
              <tbody><tr data-start-index="9076" data-end-index="9080">
                <td style="font-size:6px; line-height:10px; background-color:#FFFFFF; padding:0px 0px 0px 0px;" valign="top" align="left" data-start-index="9089" data-end-index="9208"><img class="max-width" width="600" src="http://cdn.mcauto-images-production.sendgrid.net/e8339f6be2b40dd0/a5089999-07a2-43be-a6fb-5706291b3efe/2000x740.png" alt="Banner" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" data-start-index="9219" data-end-index="9528" data-proportionally-constrained="false" data-responsive="true"></td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="cc484f28-f4f6-4f49-b7ce-bc39d9ba496e">
            <tbody>
              <tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#F2E291">
                </td>
              </tr>
            </tbody>
          </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:30px 20px 51px 20px; box-sizing:border-box;" bgcolor="#e4f1f2" data-start-index="17630" data-end-index="17938">
              <tbody><tr role="module-content" data-start-index="17945" data-end-index="17971">
                <td height="100%" valign="top" data-start-index="17980" data-end-index="18011"><table width="560" style="width:560px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
              <tbody>
                <tr>
                  <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="be355a97-733c-4b7e-a029-c0e1bc7f6717" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Hi ${req.body.user.given_name}, You've subscribed to receive alerts from Producky.&nbsp;</div>
        <div style="font-family: inherit; text-align: inherit"><br></div>
        <div style="font-family: inherit; text-align: inherit">Reminder: ${req.body.events.title} at ${req.body.events.start} to ${req.body.events.end}</div><div></div></div></td>
              </tr>
            </tbody>
          </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-start-index="20423" data-end-index="20587" data-muid="j8QRNdhMon1MUHVhKEeEcN"><tbody data-start-index="20587" data-end-index="20594"><tr data-start-index="20594" data-end-index="20598"><td align="center" bgcolor="#e4f1f2" class="outer-td" style="padding:15px 10px 0px 0px; background-color:#e4f1f2;" data-start-index="20598" data-end-index="20711"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center" data-start-index="20711" data-end-index="20841"><tbody data-start-index="20841" data-end-index="20848"><tr data-start-index="20848" data-end-index="20852"><td align="center" bgcolor="#0D8AA6" class="inner-td" style="-webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; font-size:16px; text-align:center; background-color:inherit;" data-start-index="20852" data-end-index="21039"><a style="background-color:#0D8AA6; height:px; width:442px; font-size:16px; line-height:normal; font-family:Helvetica, Arial, sans-serif; color:#F2E291; padding:10px 18px 10px 18px; text-decoration:none; -webkit-border-radius:0px; -moz-border-radius:0px; border-radius:0px; border:1px solid #0D8AA6; display:inline-block; border-width:1px; border-style:solid; border-color:#0D8AA6; letter-spacing:0px; font-weight:normal;" href="https://sleepy-retreat-90049.herokuapp.com/" target="_blank" data-start-index="21039" data-end-index="21368">View in Calendar</a></td></tr></tbody></table></td></tr></tbody></table></td>
                </tr>
              </tbody>
            </table></td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="24525409-4e96-488c-ad9d-808d0010e90b">
            <tbody>
              <tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#F2E291">
                </td>
              </tr>
            </tbody>
          </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:0px 0px 0px 0px; background-color:#F7F7F7; box-sizing:border-box;" bgcolor="" data-start-index="31760" data-end-index="32098">
              <tbody><tr role="module-content" data-start-index="32105" data-end-index="32131">
                <td height="100%" valign="top" data-start-index="32140" data-end-index="32171"><table width="300" style="width:300px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
              <tbody>
                <tr>
                  <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="33024" data-end-index="33162" data-muid="4B9t7Htois9ZYnvD3jmqzm" data-mc-module-version="2019-10-22">
              <tbody><tr data-start-index="33169" data-end-index="33173">
                <td style="padding:15px 0px 15px 0px; background-color:#e4f1f2; line-height:NaNpx;" height="100%" valign="top" bgcolor="#e4f1f2" data-start-index="33182" data-end-index="33325"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
        <div style="font-family: inherit; text-align: center"><br></div>
        <div style="font-family: inherit; text-align: center"><span style="font-family: Lato, sans-serif; color: #595959; background-color: transparent; font-weight: 400; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: normal; font-variant-east-asian: normal; text-decoration-line: none; text-decoration-style: initial; text-decoration-color: initial; vertical-align: baseline; white-space: pre-wrap; font-size: 24px">Try Producky! With calendar, note, and Kanan sections, organizing has never been so quack.</span></div>
        <div style="font-family: inherit; text-align: left"><br></div><div></div></div></td>
              </tr>
            </tbody></table></td>
                </tr>
              </tbody>
            </table><table width="300" style="width:300px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
              <tbody>
                <tr>
                  <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="34875" data-end-index="35013" data-muid="2RC6fJy3N4BFUJLHgwHeGb" data-mc-module-version="2019-10-22">
              <tbody><tr data-start-index="35020" data-end-index="35024">
                <td style="padding:26px 5px 18px 0px; background-color:#e4f1f2; line-height:NaNpx;" height="100%" valign="top" bgcolor="#e4f1f2" data-start-index="35033" data-end-index="35176"><div><div style="font-family: inherit; text-align: right"><br></div>
        <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif; font-size: 18px">Team Producky</span></div>
        <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif; font-size: 18px">112 Yonge St</span></div>
        <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif; font-size: 18px">Toronto, ON&nbsp;</span></div>
        <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif; font-size: 18px">M5N 2F5</span></div>
        <div style="font-family: inherit; text-align: right"><span style="font-size: 18px">&nbsp;</span></div>
        <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif; font-size: 18px">&nbsp;</span><a href="{{{unsubscribe_preferences}}}" data-start-index="36539" data-end-index="36575" target="_blank"><span style="color: #0055b8; font-family: arial, helvetica, sans-serif; font-size: 18px">Update Preferences</span></a></div><div></div></div></td>
              </tr>
            </tbody></table></td>
                </tr>
              </tbody>
            </table></td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="40744941-e18e-48b3-b8cb-7bbeaeec7f8a">
            <tbody>
              <tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
                </td>
              </tr>
            </tbody>
          </table></td>
                                              </tr>
                                            </table>
                                            <!--[if mso]>
                                          </td>
                                        </tr>
                                      </table>
                                    </center>
                                    <![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>
            </body>
          </html>`
        const plainText = `This is a reminder from Producky.

        Email not displaying correctly? View it ( ) in your browser.
        
        ( https://sleepy-retreat-90049.herokuapp.com/ ) ( https://sleepy-retreat-90049.herokuapp.com/ ) ( https://sleepy-retreat-90049.herokuapp.com/ ) ( https://sleepy-retreat-90049.herokuapp.com/ ) ( https://sleepy-retreat-90049.herokuapp.com/ )
        
        Hi ${req.body.user.given_name}, You've subscribed to receive alerts from Producky.
        
        Reminder: ${req.body.events.title} at ${req.body.events.start} to ${req.body.events.end}
        
        View in Calendar ( https://sleepy-retreat-90049.herokuapp.com/ )
        
        Try Producky! With calendar, note, and Kanan sections, organizing has never been so quack.
        
        Team Producky
        112 Yonge St
        Toronto, ON
        M5N 2F5`

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASS
            }
        });

        let mailOptions = {
            from: 'teamproducky@gmail.com',
            to: req.body.user.email,
            replyTo: 'teamproducky@gmail.com',
            subject: 'Reminder!',
            text: plainText,
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log('error:', err);
                res.status(500).send({status: 'FAIL', msg: 'Internal error: email not sent'})
            } else {
                console.log('Message sent: %s', info);
                console.log('Message URL: %s', nodemailer.getTestMessageUrl);
                res.sendStatus(status).json({status: 'OK', msg: 'Email sent'})
            }
        });
    })
})

module.exports = router