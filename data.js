const portfolioData = {
  stats: [
    { value: "1+", label: "Year SOC / Cyber Defence Experience" },
    { value: "83%", label: "First Class BSc (Hons) Cybersecurity and Networks Result." },
    { value: "Dean’s", label: "Award Recipient for Outstanding Achievement throughout the whole course." },
    { value: "BTL1", label: "Blue Team Level 1 - Cyber Defense Security Certification." }
  ],

  timeline: [
    {
      type: "Education",
      year: "2010–2016",
      title: "Secondary Education Examination",
      organisation: "Siddhartha Vanasthali Institute (SVI)",
      location: "Balaju / Banasthali, Kathmandu, Nepal",
      summary: "Completed school-level academics with a strong foundation in science, mathematics, computer science and accountancy.",
      details: [
        "Achieved GPA 3.55, Grade A / Distinction.",
        "Studied English, Grammar, Compulsory Mathematics, Optional Mathematics, Nepali, Social Studies, Science, Computer Science, Accountancy and EPH.",
        "Completed the Secondary Education Examination, which is broadly comparable to GCSE-level education in the UK/EMEA context.",
        "This stage helped build the academic foundation for later studies in computing, cybersecurity and networks."
      ],
      linkText: "Visit SVI website",
      link: "https://svi.edu.np/",
      tags: ["School", "Foundation", "Computer Science"],
      color: "#2ba6d8",
      icon: "⌂"
    },
    {
      type: "Education",
      year: "2017–2020",
      title: "High Level Education",
      organisation: "National College of Computer Studies (NCCS)",
      location: "Paknajol-Thamel, Kathmandu, Nepal",
      summary: "Completed college-level studies focused on Computer Science, Business Mathematics, Accountancy and Economics.",
      details: [
        "Achieved CGPA 3.72, Grade A+ / Distinction.",
        "Studied English, Computer Science, Business Mathematics/Nepali, Accountancy and Economics.",
        "Built practical programming confidence through C programming coursework, debugging tasks and project-based assessment.",
        "Created a website project using HTML and CSS, which helped develop early web development and presentation skills."
      ],
      linkText: "Visit NCCS website",
      link: "https://nccs.edu.np/index",
      tags: ["Computer Science", "C Programming", "HTML/CSS"],
      color: "#9ccc56",
      icon: "▣"
    },
    {
      type: "Education",
      year: "Jan 2022–May 2025",
      title: "BSc (Hons), Cybersecurity and Networks with Placement",
      organisation: "University of East London (UEL)",
      location: "University Way, London, E16 2RD, United Kingdom",
      summary: "Graduated with First Class Honours, 83% overall, and Dean’s Award recognition.",
      details: [
        "Completed a BSc focused on cyber defence, network architecture, secure systems design, cloud computing, system administration, digital forensics, business continuity and advanced cybersecurity topics.",
        "Awarded First Class Honours with 83% overall and recognised with the Dean’s Award.",
        "Completed an industrial placement year at Dyson as part of the degree structure.",
        "Key modules included Cyber Security, System Administration, Data Communication and Networks, Enterprise Architecture and Cloud Computing, Business Continuity Planning, and Advanced Topics in Cyber Security and Networks.",
        "The course strengthened both theoretical security knowledge and hands-on technical capability for SOC and security operations roles."
      ],
      linkText: "View UEL course page",
      link: "https://uel.ac.uk/undergraduate/courses/bsc-hons-cyber-security-networks",
      tags: ["First Class", "83%", "Dean’s Award", "Cybersecurity"],
      color: "#ff9345",
      icon: "◉"
    },
    {
      type: "Experience",
      year: "2021–2023",
      title: "Student – IT & Technical Support",
      organisation: "Student / Technical Project Experience",
      location: "Academic and project-based technical work",
      summary: "Built early practical experience in IT support, web development, networking and technical documentation.",
      details: [
        "Supported the development and maintenance of web pages using HTML, CSS and JavaScript.",
        "Assisted in creating and refining technical documentation for IT and project deliverables.",
        "Worked on a Cisco Packet Tracer network simulation project to understand communication across multiple network segments.",
        "Developed problem-solving, troubleshooting and structured reporting skills."
      ],
      linkText: "View portfolio website",
      link: "https://sagartimalsina.com/",
      tags: ["IT Support", "Documentation", "Packet Tracer"],
      color: "#71318c",
      icon: "✦"
    },
    {
      type: "Experience",
      year: "Aug 2023–Aug 2024",
      title: "Cyber Security Analyst Placement",
      organisation: "Dyson – Cyber Defence / SOC / CTI",
      location: "United Kingdom",
      summary: "Completed a one-year industrial placement across SOC operations, Cyber Defence and Cyber Threat Intelligence.",
      details: [
        "Performed alert triage and investigation using ServiceNow and enterprise security workflows.",
        "Used SIEM, XDR and Azure security tooling including Microsoft Sentinel, Microsoft Defender and Entra ID.",
        "Supported incident response by investigating alerts, documenting findings and closing tickets after review.",
        "Contributed to cyber use case development, automation ideas, workbook maintenance and security data analysis.",
        "Worked with engineering teams on Google Cloud Platform server configuration and Linux-based documentation tasks.",
        "Moved into Cyber Threat Intelligence work, including MISP Threat Intelligence Platform support, IOC visibility and intelligence-led investigation workflows.",
        "Created Power BI dashboards aligned with Cyber Kill Chain concepts to improve security reporting and stakeholder visibility."
      ],
      linkText: "View Dyson LinkedIn page",
      link: "https://www.linkedin.com/company/dyson/",
      tags: ["SOC", "CTI", "Sentinel", "KQL", "MISP", "GCP"],
      color: "#ff4b62",
      icon: "▰"
    },
    {
      type: "Project",
      year: "2026",
      title: "Detection Engineering Portfolio",
      organisation: "GitHub Portfolio",
      location: "Public GitHub Repository",
      summary: "Built a public detection engineering portfolio using Sigma-style rules, KQL logic and MITRE ATT&CK mapping.",
      details: [
        "Created authentication abuse detection logic for failed logons followed by successful authentication.",
        "Mapped detection logic to MITRE ATT&CK techniques including T1110 Brute Force and T1078 Valid Accounts.",
        "Documented log source assumptions, false positives, investigation methodology and analyst triage steps.",
        "Built Sentinel-focused lab work including custom log ingestion and KQL correlation concepts."
      ],
      linkText: "Open GitHub project",
      link: "https://github.com/SR7sagar/Detection-Engineering-Portfolio",
      tags: ["Sigma", "MITRE ATT&CK", "KQL", "Sentinel"],
      color: "#61c5be",
      icon: "⌬"
    }
  ],

  projects: [
    {
      title: "Detection Engineering Portfolio - Microsoft Sentinel Lab Pipeline",
      bullets: [
        "Built detection logic for brute force and password spraying behaviour.",
        "Correlated multiple failed logons followed by a successful login.",
        "Mapped the detection to MITRE ATT&CK T1110 and T1078.",
        "Documented false positives, log source assumptions and analyst investigation steps.",
        "Designed a low-cost Sentinel lab for custom authentication log ingestion.",
        "Used Data Collection Endpoint, Data Collection Rule and Logs Ingestion API concepts.",
        "Validated ingestion flow and tested KQL-based detection logic.",
      ],
      tools: "Entra ID • KQL • Microsoft Sentinel • MITRE ATT&CK • Incident Response",
      link: "https://github.com/SR7sagar/Detection-Engineering-Portfolio"
    },
    /*
      title: "Microsoft Sentinel Lab Pipeline",
      bullets: [
        "Designed a low-cost Sentinel lab for custom authentication log ingestion.",
        "Used Data Collection Endpoint, Data Collection Rule and Logs Ingestion API concepts.",
        "Validated ingestion flow and tested KQL-based detection logic.",
        "Focused on practical detection engineering evidence for portfolio use."
      ],
      tools: "Microsoft Sentinel • KQL • Azure Monitor • Logs Ingestion API",
      link: "https://github.com/SR7sagar/Detection-Engineering-Portfolio"
    },
    {
      title: "SOC Investigation Workflow",
      bullets: [
        "Created a structured triage process for suspicious login and impossible travel scenarios.",
        "Included checks for IP address, device, VPN pattern, user history and post-login activity.",
        "Defined escalation criteria and containment actions for senior SOC/CIRT review.",
        "Aligned the workflow to practical SOC interview and analyst expectations."
      ],
      tools: "Entra ID • Sentinel • Incident Response • MITRE ATT&CK",
      link: "https://github.com/SR7sagar/Detection-Engineering-Portfolio"
    } */
  ],

  skills: [
    {
      category: "SOC & Incident Response",
      items: [
        "Alert triage and investigation",
        "Incident response workflow support",
        "ServiceNow ticket handling",
        "Suspicious login and identity investigation",
        "Escalation notes and analyst reporting"
      ]
    },
    {
      category: "SIEM, Detection & Threat Hunting",
      items: [
        "Microsoft Sentinel",
        "KQL - Kusto Query Language",
        "Sigma-style detection logic",
        "MITRE ATT&CK mapping",
        "Threat hunting and detection documentation"
      ]
    },
    {
      category: "Cyber Threat Intelligence",
      items: [
        "MISP Threat Intelligence Platform exposure",
        "IOC handling and enrichment concepts",
        "Threat actor and campaign research",
        "Cyber Kill Chain-based reporting",
        "OSINT and intelligence-led investigation"
      ]
    },
    {
      category: "Cloud & Security Platforms",
      items: [
        "Microsoft Entra ID",
        "Microsoft Defender for Endpoint",
        "Azure security tooling",
        "Google Cloud Platform virtual machine support",
        "Linux CLI and system administration basics"
      ]
    },
    {
      category: "Technical & Programming",
      items: [
        "Python",
        "SQL",
        "C Programming",
        "HTML, CSS and JavaScript",
        "Cisco Packet Tracer and networking fundamentals"
      ]
    },
    {
      category: "Professional Skills",
      items: [
        "Technical writing and documentation",
        "Security workbook and dashboard support",
        "Cross-team collaboration",
        "Problem solving and troubleshooting",
        "Continuous learning and time management"
      ]
    }
  ],

  certifications: [
    {
      name: "Blue Team Level 1 (BTL1)",
      issuer: "Security Blue Team",
      status: "Completed",
      imageName: "https://drive.google.com/uc?export=view&id=1mZ3GIwfVpsML9fmYaKLoJmYF3Zy14jtL",
      link: "https://drive.google.com/file/d/1mZ3GIwfVpsML9fmYaKLoJmYF3Zy14jtL/view?usp=sharing"
    },
    {
      name: "Security Blue Team Junior Analyst",
      issuer: "Security Blue Team",
      status: "Completed",
      imageName: "https://drive.google.com/file/d/1Bx7RdOLt76TEnhQo216SA0FsfV__ZRnr/view?usp=sharing",
      link: "https://drive.google.com/file/d/1Bx7RdOLt76TEnhQo216SA0FsfV__ZRnr/view?usp=sharing"
    },
    {
      name: "Cybersecurity Engineering Virtual Internship Program",
      issuer: "SAP",
      status: "Completed",
      imageName: "https://drive.google.com/file/d/1BqnZ37W3sU4KzgLy0RnlTKvl_3GXas19/view?usp=sharing",
      link: "https://drive.google.com/file/d/1BqnZ37W3sU4KzgLy0RnlTKvl_3GXas19/view?usp=sharing"
    },
    {
      name: "Cybersecurity Consulting Virtual Case Experience",
      issuer: "pwc",
      status: "Completed",
      imageName: "https://drive.google.com/file/d/1GnP9d76pFSbEgLgBWIafqqah9Zbrnc-l/view?usp=sharing",
      link: "https://drive.google.com/file/d/1GnP9d76pFSbEgLgBWIafqqah9Zbrnc-l/view?usp=sharing"
    },
    {
      name: "Cybersecurity Virtual Experience Program",
      issuer: "Mastercard",
      status: "Completed",
      imageName: "https://drive.google.com/file/d/1or2B5Vwta1CKIPLBKUi1x2NM0oelJk3U/view?usp=sharing",
      link: "https://drive.google.com/file/d/1or2B5Vwta1CKIPLBKUi1x2NM0oelJk3U/view?usp=sharing"
    },
    {
      name: "Visa Token Service Technology Virtual Experience Program",
      issuer: "Visa",
      status: "Completed",
      imageName: "https://drive.google.com/file/d/14iZuMXKXqJJe3VAoy66YrxgVNwqpNOZ4/view?usp=sharing",
      link: "https://drive.google.com/file/d/14iZuMXKXqJJe3VAoy66YrxgVNwqpNOZ4/view?usp=sharing"
    },
    {
      name: "Cybersecurity Virtual Experience Program",
      issuer: "Telstra",
      status: "Completed",
      imageName: "https://drive.google.com/file/d/1fY9s7Se1ipWZhzr_YMdXaXN6SEQa78rZ/view?usp=sharing",
      link: "https://drive.google.com/file/d/1fY9s7Se1ipWZhzr_YMdXaXN6SEQa78rZ/view?usp=sharing"
    },
    {
      name: "Shields Up: Cybersecurity Virtual Experience Program",
      issuer: "AIG",
      status: "Completed",
      imageName: "https://drive.google.com/file/d/1BYGVLOhqomHFuHR0KKXU9L6I8u21J7XC/view?usp=sharing",
      link: "https://drive.google.com/file/d/1BYGVLOhqomHFuHR0KKXU9L6I8u21J7XC/view?usp=sharing"
    }
  ]
};
