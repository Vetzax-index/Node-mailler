const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'MAİLİNİZ',
        pass: 'GOOGLE ŞİFRELERİ'
    }
})

let mailOptions = {
    from: 'GÖNDEREN MAİL',
    to: 'ALICI MAİL',
    subject: 'BAŞLIK',
    html: '<h1>  MAİLİNİZ <h1>'
}

transporter.sendMail(mailOptions,(err,data)=> {
    if(err) console.log(err)
    else console.log('mail gönderildi')
})


//Vetzax#1997 Tarafından kodlanmıştır

//ister mail göndermek için isterseniz mail spam için kullana bilirsiniz :)

//iyi kullanımlar...