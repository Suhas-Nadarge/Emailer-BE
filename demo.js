'use strict';
const nodemailer = require('nodemailer');
var contact = [
'snadarge@osius.com'
]
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
            //  user: 'sanitary.Fevino@gmail.com',
            //  pass: 'Fevino@8989'
            user : 'nadargesuhas@gmail.com',
            pass : 'Nasa@*053'
         }
     });
    // send mail with defined transport object
   
    var i=0;
    while(i < contact.length) {
    if(i%150 ===0) {
      setTimeout(() => {
      }, 180000);
    }

    let  info = await transporter.sendMail({
        from: 'sanitary.Fevino@gmail.com', // sender address
        to: contact[i], // list of receivers
        subject: 'Sanitary Napkin Vending Machine', // Subject line
        text: 'Fevino Industries LLP', // plain text body
        html: ' <p style="color:black;font-size:16px;"><b>Hello Sir/Madam,</b><br><br> We at <b>Fevino Industries LLP</b> are one of the top leading manufacturer of <b>Sanitary Napkin Vending Machine</b> in India, Located at Pune. One of our workshops is specialized in manufacturing <b>Indias first Solar Power </b> based vending machine. Using the latest technology we deliver incredible efficiency, without sacrificing application performance. Our Sanitary napkin vending machine are an ideal for <b>Schools, Colleges, Hospitals,Corporate Offices, Hostels</b> and can provide increased value. We can supply not only a complete vending machine but also the customization as per client requirement.</p><br><h1 style="color:black;font-size:16px;">Thanks & Regards,</h1><br><br><table  data-mysignature-date="2019-10-06T17:37:30.598Z" data-mysignature-is-paid="0" width="500" cellspacing="0" cellpadding="0" border="0"> <tr> <td> <table cellspacing="0" cellpadding="0" border="0"> <tr>  <td valign="top" width="100" style="padding:0 8px 0 0;vertical-align: top;"> <img alt="   SANITARYWARE " width="100" style="width:100px;moz-border-radius:10%;khtml-border-radius:10%;o-border-radius:10%;webkit-border-radius:10%;ms-border-radius:10%;border-radius:10%;" src="https://img.mysignature.io/p/0/6/5/065c52b2-f0cd-5f15-9133-a3b72f37b708.png?time=1570383449" /> </td>  <td style="font-size:1em;padding:0 15px 0 8px;vertical-align: top;" valign="top"> <table cellspacing="0" cellpadding="0" border="0" style="line-height: 1.4;font-family:Verdana, Geneva, sans-serif;font-size:90%;color: #000001;"> <tr> <td> <div style="font: 1.2em Verdana, Geneva, sans-serif;color:#000001;">FEVINO INDUSTRIES</div> </td> </tr> <tr> <td style="padding: 4px 0;"> <div style="color:#000001;font-family:Verdana, Geneva, sans-serif;">      SANITARYWARE    </div> </td> </tr>   <tr> <td> <span style="font-family:Verdana, Geneva, sans-serif;color:#91AE6D;">Mobile:&nbsp;</span> <span><a style="font-family:Verdana, Geneva, sans-serif;color:#000001;" href="tel: 8180836026 / 8389898952"> 8180836026 / 8389898952</a></span> </td> </tr>   <tr> <td> <span style="font-family:Verdana, Geneva, sans-serif;color:#91AE6D;">Website:&nbsp;</span> <span style="font-family:Verdana, Geneva, sans-serif;"><a href="https://www.fevino.in " style="color:#000001;" target="_blank">www.fevino.in </a></span> </td> </tr>   <tr> <td> <span style="font-family:Verdana, Geneva, sans-serif;color:#91AE6D;">Email:&nbsp;</span> <span><a href="mailto: info.fevino@gmail.com" target="_blank" style="font-family:Verdana, Geneva, sans-serif;color: #000001;"> info.fevino@gmail.com</a></span> </td> </tr>    <tr> <td> <span style="font-family:Verdana, Geneva, sans-serif;color:#91AE6D;">Address:&nbsp;</span> <span style="font-family:Verdana, Geneva, sans-serif;color:#000001;">Sr. No.36/1/1 Near Lokmat Press, Sinhgad Rd, Vadgaon Khurd, Pandurang Industrial Area, Pune, Maharashtra 411041</span> </td> </tr>   </table> </td>  </tr> </table> </td> </tr></table><table class="branding" cellspacing="0" cellpadding="0" border="0"> <tr><td style="display:block;padding:15px 0 0 0;"></td></tr></table>', // html body
        attachments: [
          {
          filename: 'broucher.pdf',
          path: 'C:/Users/snadarge/Desktop/New folder/SNVM.pdf',
          contentType: 'application/pdf'
        },
        {
          filename: 'image.jpeg',
          path: 'C:/Users/snadarge/Desktop/New folder/SNVM Image 1.jpeg',
          contentType: 'application/jpeg'
        },
        {
          filename: 'image1.jpeg',
          path: 'C:/Users/snadarge/Desktop/New folder/SNVM Image 2.JPG',
          contentType: 'application/jpeg'
        }
        // ,
        // {
        //   filename: 'demo.mp4',
        //   path: 'C:/Users/snadarge/Desktop/New folder/SNVM Video.mp4',
        //   contentType: 'application/mp4'
        // },
      ],
    });
    i++;
  
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    console.log('Preview URL: %s', +i+'-' +new Date()+'-'+nodemailer.getTestMessageUrl(info));
  }
} 




main().catch(console.error);
