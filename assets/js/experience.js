document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Area Manager (Full-Time)",
    cardImage: "assets/images/experience-page/amazon.png",
    place: "Amazon Inc.",
    time: "(Sept 2024 – Present)",
    desp: "<li>Supervise daily operations, optimizing workflow and efficiency across departments to enhance productivity.</li> <li>Implement automated cost analysis tools, improving data-driven decision-making and reducing operational expenses.</li> <li>Utilize bridge reporting and analytics to track performance trends, identifying areas for process improvements.</li>",
  },
  {
    title: "Data Scientist Intern",
    cardImage: "assets/images/experience-page/hp.png",
    place: "HP Inc.",
    time: "(Aug 2023 – Nov 2024)",
    desp: "<li>Developed and deployed an AI-driven inventory optimization system, enhancing forecasting accuracy and reducing excess stock.</li> <li>Achieved 90% accuracy in Attainment Flash simulations and demand sales projections using machine learning.</li> <li>Automated data pipelines with Python, SQL, and AWS services to streamline demand forecasting and supply chain analytics.</li>",
  },
  {
    title: "Research Analyst & Graduate Assistant",
    cardImage: "assets/images/experience-page/east.png",
    place: "East Tennessee State University",
    time: "(Aug 2021 – Apr 2023)",
    desp: "<li>Conducted advanced data analysis on student reports, research data, and operational performance to drive strategic decision-making.</li> <li>Developed machine learning models in Python and R for data analysis, improving research outcomes and student engagement insights.</li> <li>Designed and led data analytics training sessions in Python, R, and MATLAB, enhancing students' analytical capabilities.</li>",
  },
  {
    title: "Data Analyst & ML Engineer (Contract)",
    cardImage: "assets/images/experience-page/ncdc.png",
    place: "Nigeria Centre for Disease Control (NCDC)",
    time: "(June 2021 – Dec 2021)",
    desp: "<li>Developed predictive models for disease outbreak detection, improving early response strategies.</li> <li>Automated data pipelines using Python, R, and SQL, increasing data accuracy and efficiency by 30%.</li> <li>Collaborated with multidisciplinary teams to enhance disease surveillance and outbreak response.</li>",
  },
  {
    title: "Data Management Consultant",
    cardImage: "assets/images/experience-page/data.png",
    place: "Federal Character Commission",
    time: "(Oct 2020 – May 2021)",
    desp: "<li>Led data management strategy development, streamlining collection, processing, and governance practices.</li> <li>Created SQL-based automation tools to optimize data validation, reducing processing errors by 20%.</li> <li>Conducted training sessions on data governance and analytics tools, improving data literacy across departments.</li>",
  },
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/paint.png",
    place: "Regional Paint and Chemical",
    time: "(Jan 2018 – Jun 2020)",
    desp: "<li>Developed a predictive sales forecasting model using machine learning, increasing inventory accuracy and demand forecasting efficiency.</li> <li>Built automated data pipelines using Python and SQL, improving data integrity and operational performance.</li> <li>Led machine learning initiatives that optimized product demand prediction, resulting in a 20% increase in profit.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Treasurer",
    cardImage: "assets/images/experience-page/nsbe.jpg",
    description:
      "Managed and allocated organization funds, ensuring proper budgeting for events, scholarships, and outreach programs. Organized fundraising initiatives, increasing financial support for student-led projects and professional development. Collaborated with the executive board to plan workshops and networking events, supporting members’ career growth.",
  },
  {
    title: "Student Ambassador",
    cardImage: "assets/images/experience-page/sbe.jpg",
    description:
      "Served as a liaison between students and faculty, promoting diversity and inclusion in STEM fields. Led recruitment efforts, increasing membership and student participation in networking events and mentorship programs. Organized career development workshops, connecting students with industry professionals.",
  },
  {
    title: "Member",
    cardImage: "assets/images/experience-page/ieee.jpg",
    description:
      "Engage in global networking and technical discussions with professionals in the engineering and technology space. Stay updated on cutting-edge research and innovations in AI, machine learning, and data science through IEEE resources. Participate in professional development events and workshops to enhance technical and leadership skills.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);