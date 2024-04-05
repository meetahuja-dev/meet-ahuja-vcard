const saveContactButton = document.querySelector('.save-contact');

saveContactButton.addEventListener('click', () => {
    // Replace this with your actual vCard data (name, phone, email, etc.)
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Ahuja;Meet;;;
FN:Meet Ahuja
ORG:Freelancer;
TITLE:Frontend Webdevloper Solo Page Sites | Video Editor
EMAIL;type=WORK,INTERNET:Meet.ahuja212@gmail.com
TEL;TYPE=WORK,VOICE:7678231823
URL:https://instagram.com/tech_meetog
URL:https://youtube.com/@techmeetog
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact.vcf';
    link.click();

    // Revoke the temporary URL after download
    URL.revokeObjectURL(url);
});
