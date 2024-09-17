// Dil verileri
const content = {
    turkish: {
        blogTitle: "ÖZ GEÇMİŞ",
        photoCaption: "MARAZ ALİ",
        firstBlogTitle: "ÖZ GEÇMİŞ",
        firstBlogContent: "Bu, blog yazısının içeriğidir. Detaylı bilgiler burada yer alır...",
        educationTitle: "EĞİTİM",
        educationContent: "Eğitim ile ilgili içerik burada yer alacak...",
        experienceTitle: "İŞ DENEYİMİ",
        experienceContent: "İş deneyimi içerikleri burada yer alacak...",
        certificatesTitle: "KURS VE SERTİFİKALAR",
        certificatesContent: "Kurs ve sertifikalar içerikleri burada yer alacak...",
        languagesTitle: "YABANCI DİL BİLGİSİ",
        languagesContent: "Yabancı dil bilgisi içerikleri burada yer alacak...",
        skillsTitle: "BECERİLER",
        skillsContent: "Beceriler içerikleri burada yer alacak...",
        interestsTitle: "İLGİ ALANLARI",
        interestsContent: "İlgi alanları içerikleri burada yer alacak...",
        footerText: "© 2024 Blog Sayfası. Tüm hakları saklıdır.",
        footerAuthor: "Enes Gençoğlu :)"
    },
    english: {
        blogTitle: "RESUME",
        photoCaption: "MARAZ ALI",
        firstBlogTitle: "First Blog Post",
        firstBlogContent: "This is the content of the blog post. Detailed information is here...",
        educationTitle: "EDUCATION",
        educationContent: "The education content will be here...",
        experienceTitle: "WORK EXPERIENCE",
        experienceContent: "Work experience content will be here...",
        certificatesTitle: "CERTIFICATES",
        certificatesContent: "Certificates content will be here...",
        languagesTitle: "LANGUAGES",
        languagesContent: "Languages content will be here...",
        skillsTitle: "SKILLS",
        skillsContent: "Skills content will be here...",
        interestsTitle: "INTERESTS",
        interestsContent: "Interests content will be here...",
        footerText: "© 2024 Blog Page. All rights reserved.",
        footerAuthor: "Enes Gençoğlu :)"
    }
};

// Türkçe butonuna tıklama olayını tanımla
document.getElementById("turkishBtn").addEventListener("click", function() {
    document.getElementById("blog-title").innerText = content.turkish.blogTitle;
    document.getElementById("photo-caption").innerText = content.turkish.photoCaption;
    document.getElementById("first-blog-content").innerText = content.turkish.firstBlogContent;
    document.getElementById("education-title").innerText = content.turkish.educationTitle;
    document.getElementById("education-content").innerText = content.turkish.educationContent;
    document.getElementById("experience-title").innerText = content.turkish.experienceTitle;
    document.getElementById("experience-content").innerText = content.turkish.experienceContent;
    document.getElementById("certificates-title").innerText = content.turkish.certificatesTitle;
    document.getElementById("certificates-content").innerText = content.turkish.certificatesContent;
    document.getElementById("languages-title").innerText = content.turkish.languagesTitle;
    document.getElementById("languages-content").innerText = content.turkish.languagesContent;
    document.getElementById("skills-title").innerText = content.turkish.skillsTitle;
    document.getElementById("skills-content").innerText = content.turkish.skillsContent;
    document.getElementById("interests-title").innerText = content.turkish.interestsTitle;
    document.getElementById("interests-content").innerText = content.turkish.interestsContent;
    document.getElementById("footer-text").innerText = content.turkish.footerText;
    document.getElementById("footer-author").innerText = content.turkish.footerAuthor;
});

// İngilizce butonuna tıklama olayını tanımla
document.getElementById("englishBtn").addEventListener("click", function() {
    document.getElementById("blog-title").innerText = content.english.blogTitle;
    document.getElementById("photo-caption").innerText = content.english.photoCaption;
    document.getElementById("first-blog-content").innerText = content.english.firstBlogContent;
    document.getElementById("education-title").innerText = content.english.educationTitle;
    document.getElementById("education-content").innerText = content.english.educationContent;
    document.getElementById("experience-title").innerText = content.english.experienceTitle;
    document.getElementById("experience-content").innerText = content.english.experienceContent;
    document.getElementById("certificates-title").innerText = content.english.certificatesTitle;
    document.getElementById("certificates-content").innerText = content.english.certificatesContent;
    document.getElementById("languages-title").innerText = content.english.languagesTitle;
    document.getElementById("languages-content").innerText = content.english.languagesContent;
    document.getElementById("skills-title").innerText = content.english.skillsTitle;
    document.getElementById("skills-content").innerText = content.english.skillsContent;
    document.getElementById("interests-title").innerText = content.english.interestsTitle;
    document.getElementById("interests-content").innerText = content.english.interestsContent;
    document.getElementById("footer-text").innerText = content.english.footerText;
    document.getElementById("footer-author").innerText = content.english.footerAuthor;
});
