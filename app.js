// Bridge Monitoring Technologies Data
const bridgeData = {
  technologies: [
    {
      name: "Multibeam Sonar (Echoscope)",
      range: "152 meters",
      resolution: "3 cm",
      cost: "$45,000",
      accuracy: "92%",
      timeSavings: "58%",
      description: "Like dolphin echolocation for bridges - sends sound waves to create detailed underwater pictures",
      bestFor: "Large scour detection over 0.2m deep",
      category: "acoustic"
    },
    {
      name: "Mechanical Scan BV5000-1350",
      range: "30 meters", 
      resolution: "1.1 cm",
      cost: "$35,000",
      accuracy: "96%",
      timeSavings: "65%",
      description: "High-precision underwater scanning for detailed foundation inspection",
      bestFor: "High precision damage detection",
      category: "acoustic"
    },
    {
      name: "Side-scan 900kHz Sonar",
      range: "100 meters",
      resolution: "1.3 cm", 
      cost: "$28,000",
      accuracy: "88%",
      timeSavings: "45%",
      description: "Wide-area scanning perfect for finding debris and large-scale problems",
      bestFor: "Debris surveys in wide rivers",
      category: "acoustic"
    },
    {
      name: "Pile Integrity Test (PIT)",
      range: "30 meters",
      resolution: "0.5 cm",
      cost: "$8,500", 
      accuracy: "94%",
      timeSavings: "80%",
      description: "Taps concrete piles like ringing a bell to detect internal cracks and voids",
      bestFor: "Concrete pile defect detection",
      category: "ultrasonic"
    },
    {
      name: "Ultrasonic Thickness Gauge",
      range: "0.5 meters",
      resolution: "0.01 cm",
      cost: "$12,000",
      accuracy: "99%", 
      timeSavings: "75%",
      description: "Measures exactly how much steel remains in corroded bridge piles",
      bestFor: "Steel pile corrosion monitoring",
      category: "ultrasonic"
    }
  ],
  caseStudies: [
    {
      name: "Skerries Pier Steel Pile Assessment",
      year: "2021",
      location: "Ireland",
      problem: "Severe steel corrosion in marine environment",
      technology: "Ultrasonic Thickness Measurement",
      findings: [
        "100% of sections showed thickness less than 10mm (original 12mm)",
        "78% showed thickness less than 8mm (critical levels)",
        "40% showed thickness less than 6mm", 
        "35% had complete holes up to 3 meters long"
      ],
      costSaved: "Millions in replacement costs through targeted repairs",
      reference: "[15]"
    },
    {
      name: "Illinois Scour Monitoring",
      year: "2024", 
      location: "Northern Illinois",
      problem: "Real-time flood scour detection needed",
      technology: "Frequency-based Scour Sensors",
      findings: [
        "10.2 inch actual vs 10.5 inch sensor reading (2.9% error)",
        "8.35 inch actual vs 8.5 inch sensor reading (1.8% error)",
        "5.0 inch actual vs 5.2 inch sensor reading (4.0% error)"
      ],
      costSaved: "Prevents catastrophic bridge failures during floods",
      reference: "[16]"
    },
    {
      name: "I-95 Bridge Foundation Analysis", 
      year: "2024",
      location: "North Carolina",
      problem: "Scour depth predictions for new bridge design",
      technology: "Advanced Soil Testing & Hydraulic Modeling",
      findings: [
        "100-year flood: 40.5 feet predicted scour depth",
        "500-year flood: 50.8 feet predicted scour depth",
        "Cohesive clay layer at 80-96 feet could stop scour progression"
      ],
      costSaved: "Millions saved by avoiding unnecessary deep foundations",
      reference: "[14]"
    }
  ],
  costComparison: [
    {
      method: "Traditional Diver Inspection",
      cost: "$5,000",
      accuracy: "75%",
      detectionLimit: "10mm",
      safetyRisk: "High",
      weatherDependent: "Yes"
    },
    {
      method: "Multibeam Sonar System", 
      cost: "$45,000",
      accuracy: "92%",
      detectionLimit: "30mm",
      safetyRisk: "Low",
      weatherDependent: "Minimal"
    },
    {
      method: "Pile Integrity Testing",
      cost: "$8,500", 
      accuracy: "94%",
      detectionLimit: "5mm",
      safetyRisk: "Very Low",
      weatherDependent: "No"
    },
    {
      method: "Ultrasonic Thickness Testing",
      cost: "$12,000",
      accuracy: "99%", 
      detectionLimit: "0.1mm",
      safetyRisk: "Very Low",
      weatherDependent: "No"
    }
  ],
  implementationGuide: [
    {
      priority: "Critical",
      bridgeType: "Scour-critical bridges",
      recommendedTech: ["Sonar monitoring", "Real-time scour sensors"],
      costRange: "$30,000-$50,000",
      justification: "Prevents catastrophic failures during floods"
    },
    {
      priority: "High",
      bridgeType: "High-traffic urban bridges", 
      recommendedTech: ["Comprehensive monitoring suite"],
      costRange: "$100,000-$200,000",
      justification: "Economic impact of closure justifies investment"
    },
    {
      priority: "Medium",
      bridgeType: "Aging structures (40+ years)",
      recommendedTech: ["Pile Integrity Testing", "Thickness monitoring"],
      costRange: "$15,000-$25,000", 
      justification: "Early detection of internal deterioration"
    }
  ],
  references: [
    {
      id: 1,
      authors: "Missouri University of Science and Technology",
      year: "2024",
      title: "Final Report - Robot-Assisted Underwater Acoustic Imaging for Bridge Scour Inspection",
      url: "https://scholarsmine.mst.edu/cgi/viewcontent.cgi?article=1000&context=project_as-8",
      type: "Technical Report"
    },
    {
      id: 2,
      authors: "TISEC Inc.",
      year: "2020", 
      title: "Underwater Bridge Pile Inspection & Testing",
      url: "https://tisec.com/bridge-underwater-pile-inspection/",
      type: "Industry Resource"
    },
    {
      id: 3,
      authors: "Fondriest Environmental",
      year: "2025",
      title: "Monitoring Scour at Bridges and Offshore Structures", 
      url: "https://www.fondriest.com/environmental-measurements/environmental-monitoring-applications/monitoring-scour-bridges-offshore-structures/",
      type: "Technical Guide"
    },
    {
      id: 4,
      authors: "ScienceDirect",
      year: "2022",
      title: "Underwater inspection of bridge substructures using sonar and deep convolutional network",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S1474034622000209",
      type: "Journal Article"
    },
    {
      id: 5,
      authors: "NexSens",
      year: "2025",
      title: "Bridge Scour Monitoring Systems",
      url: "https://www.nexsens.com/systems/bridge_scour_monitoring",
      type: "Product Specification"
    },
    {
      id: 6,
      authors: "Federal Highway Administration",
      year: "2018",
      title: "Underwater Bridge Inspection Reference Manual",
      url: "https://www.fhwa.dot.gov/bridge/nbis/pubs/nhi23027.pdf",
      type: "Government Manual"
    },
    {
      id: 7,
      authors: "Federal Highway Administration", 
      year: "2018",
      title: "Underwater Inspection of Bridge Substructures Using Imaging Sonar",
      url: "https://www.fhwa.dot.gov/bridge/nbis/hif18049.pdf",
      type: "Government Manual"
    },
    {
      id: 8,
      authors: "Pile Dynamics, Inc.",
      year: "2025",
      title: "PIT - Pile Integrity Tester for Low Strain Testing",
      url: "https://www.pile.com/products/pit/",
      type: "Product Specification"
    },
    {
      id: 9,
      authors: "Screening Eagle Technologies",
      year: "2024", 
      title: "Pundit PI8000",
      url: "https://www.screeningeagle.com/en/products/pundit-pi8000",
      type: "Product Specification"
    },
    {
      id: 10,
      authors: "GRL Engineers",
      year: "2022",
      title: "Non-Destructive Evaluation of Deep Foundations",
      url: "https://www.grlengineers.com/wp-content/uploads/2022/09/ND_Evaluations-1.pdf",
      type: "Technical Report"
    },
    {
      id: 11,
      authors: "U.S. Navy",
      year: "1987",
      title: "Underwater Facilities Inspection and Assessment at Naval Submarine Base San Diego, California",
      url: "https://apps.dtic.mil/sti/tr/pdf/ADA166489.pdf",
      type: "Government Report"
    },
    {
      id: 12,
      authors: "Missouri University of Science and Technology",
      year: "2024",
      title: "Robot-Assisted Underwater Acoustic Imaging for Bridge Scour Inspection. Scholars' Mine Project AS-8",
      url: "",
      type: "Research Project"
    },
    {
      id: 13,
      authors: "Acadlore",
      year: "2024",
      title: "Comparative Analysis of 1D and 2D Modeling Approaches for Scour Depth Prediction at Bridge Piers. Journal of Civil and Hydraulic Engineering, 2(3)",
      url: "https://www.acadlore.com/article/JCHE/2024_2_3/jche020304",
      type: "Journal Article"
    },
    {
      id: 14,
      authors: "Federal Highway Administration",
      year: "2024",
      title: "NextScour Case Study: The I–6064/I–95 Bridge Replacements Over the Lumber River in Lumberton, NC. Publication No. FHWA-HRT-24-038",
      url: "",
      type: "Case Study"
    },
    {
      id: 15,
      authors: "Fingal County Council",
      year: "2021",
      title: "Underwater Survey Report Steel Sheet Pile Survey Skerries Pier",
      url: "https://www.fingal.ie/sites/default/files/2024-03/underwater-survey-report-2021.pdf",
      type: "Survey Report"
    },
    {
      id: 16,
      authors: "Illinois Department of Transportation",
      year: "2024", 
      title: "Field Implementation and Evaluation of the Simple Cost-Effective Scour Monitoring Technology",
      url: "https://apps.ict.illinois.edu/projects/getfile.asp?id=3037",
      type: "Field Study"
    },
    {
      id: 17,
      authors: "Federal Highway Administration",
      year: "2024",
      title: "National Bridge Inspection Standards - Bridges & Structures",
      url: "https://www.fhwa.dot.gov/bridge/nbis2022/qanda/08.cfm",
      type: "Standards Document"
    },
    {
      id: 18,
      authors: "Jiban Sogo Kenkyujo",
      year: "2016",
      title: "Pile Integrity Test Technical Manual",
      url: "http://www.jibansogokenkyujo.com/pit-tech.eng.pdf",
      type: "Technical Manual"
    },
    {
      id: 19,
      authors: "Resensys",
      year: "2019",
      title: "Scour Critical Structure Monitoring Application Note",
      url: "https://resensys.com/resensys20/scour-critical-application-note.html",
      type: "Application Note"
    },
    {
      id: 20,
      authors: "U.S. Geological Survey", 
      year: "2022",
      title: "Implementing a Rapid Deployment Bridge Scour Monitoring System in Colorado, 2019. Scientific Investigations Report 2022–5023",
      url: "",
      type: "Scientific Report"
    },
    {
      id: 21,
      authors: "Encardio Rite",
      year: "1999",
      title: "Advanced Scour Monitoring Systems for Bridge Safety",
      url: "https://www.encardio.com/geotechnical-products/scour-monitoring-system",
      type: "Product Specification"
    },
    {
      id: 22,
      authors: "FPrimeC Solutions",
      year: "2024",
      title: "How to Evaluate Existing Piles and Foundations",
      url: "https://fprimec.com/how-to-evaluate-existing-piles-and-foundations/",
      type: "Technical Guide"
    },
    {
      id: 23,
      authors: "Open Research Europe",
      year: "2025",
      title: "Two pilot case studies for bridge-scour monitoring",
      url: "https://open-research-europe.ec.europa.eu/articles/4-274",
      type: "Research Article"
    },
    {
      id: 24,
      authors: "California Department of Transportation",
      year: "2015",
      title: "Underwater Inspection Procedures",
      url: "https://dot.ca.gov/-/media/dot-media/programs/maintenance/documents/f0009172-uwi-procedures-a11y.pdf",
      type: "Procedures Manual"
    }
  ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderTechnologies();
    renderCaseStudies();
    renderCostComparison();
    renderImplementationGuide();
    renderReferences();
    setupEventListeners();
    animateOnScroll();
});

// Render Technologies
function renderTechnologies() {
    const techGrid = document.getElementById('tech-grid');
    if (!techGrid) return;
    
    try {
        techGrid.innerHTML = bridgeData.technologies.map(tech => `
            <div class="tech-card fade-in" data-category="${tech.category}">
                <div class="tech-header">
                    <div>
                        <h3 class="tech-name">${tech.name}</h3>
                        <p class="tech-description">${tech.description}</p>
                    </div>
                    <span class="tech-cost">${tech.cost}</span>
                </div>
                <div class="tech-specs">
                    <div class="tech-spec">
                        <span class="spec-label">Range</span>
                        <span class="spec-value">${tech.range}</span>
                    </div>
                    <div class="tech-spec">
                        <span class="spec-label">Resolution</span>
                        <span class="spec-value">${tech.resolution}</span>
                    </div>
                    <div class="tech-spec">
                        <span class="spec-label">Accuracy</span>
                        <span class="spec-value">${tech.accuracy}</span>
                    </div>
                    <div class="tech-spec">
                        <span class="spec-label">Time Savings</span>
                        <span class="spec-value">${tech.timeSavings}</span>
                    </div>
                </div>
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-card-border);">
                    <strong style="color: var(--pvamu-purple);">Best For:</strong> ${tech.bestFor}
                </div>
            </div>
        `).join('');
    } catch (error) {
        handleRenderError('technologies', error);
    }
}

// Render Case Studies
function renderCaseStudies() {
    const caseStudiesContainer = document.getElementById('case-studies-container');
    if (!caseStudiesContainer) return;
    
    try {
        caseStudiesContainer.innerHTML = bridgeData.caseStudies.map(study => `
            <div class="case-study fade-in">
                <div class="case-study-header">
                    <h3 class="case-study-title">${study.name}</h3>
                    <div class="case-study-meta">
                        <span class="meta-item">${study.year}</span>
                        <span class="meta-item">${study.location}</span>
                        <span class="meta-item">${study.technology}</span>
                    </div>
                    <p><strong>Problem:</strong> ${study.problem}</p>
                </div>
                <div class="case-study-content">
                    <h4 style="color: var(--pvamu-purple); margin-bottom: 12px;">Key Findings:</h4>
                    <ul class="findings-list">
                        ${study.findings.map(finding => `<li>${finding}</li>`).join('')}
                    </ul>
                </div>
                <div class="case-study-footer">
                    <span class="cost-saved">💰 ${study.costSaved}</span>
                    <span class="reference">Reference: ${study.reference}</span>
                </div>
            </div>
        `).join('');
    } catch (error) {
        handleRenderError('case-studies', error);
    }
}

// Render Cost Comparison Table
function renderCostComparison() {
    const comparisonTable = document.getElementById('comparison-table');
    if (!comparisonTable) return;
    
    try {
        const tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Cost</th>
                        <th>Accuracy</th>
                        <th>Detection Limit</th>
                        <th>Safety Risk</th>
                        <th>Weather Dependent</th>
                    </tr>
                </thead>
                <tbody>
                    ${bridgeData.costComparison.map(method => `
                        <tr>
                            <td><strong>${method.method}</strong></td>
                            <td>${method.cost}</td>
                            <td>${method.accuracy}</td>
                            <td>${method.detectionLimit}</td>
                            <td>${method.safetyRisk}</td>
                            <td>${method.weatherDependent}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        comparisonTable.innerHTML = tableHTML;
    } catch (error) {
        handleRenderError('cost-comparison', error);
    }
}

// Render Implementation Guide
function renderImplementationGuide() {
    const implementationGrid = document.getElementById('implementation-grid');
    if (!implementationGrid) return;
    
    try {
        implementationGrid.innerHTML = bridgeData.implementationGuide.map(guide => `
            <div class="implementation-card fade-in">
                <span class="priority-badge priority-${guide.priority.toLowerCase()}">${guide.priority} Priority</span>
                <h3 style="color: var(--pvamu-purple); margin-bottom: 16px;">${guide.bridgeType}</h3>
                <div style="margin-bottom: 16px;">
                    <strong>Recommended Technologies:</strong>
                    <ul style="margin-top: 8px; padding-left: 20px;">
                        ${guide.recommendedTech.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
                <div style="margin-bottom: 16px;">
                    <strong style="color: var(--pvamu-gold);">Cost Range:</strong> ${guide.costRange}
                </div>
                <div>
                    <strong>Justification:</strong> ${guide.justification}
                </div>
            </div>
        `).join('');
    } catch (error) {
        handleRenderError('implementation', error);
    }
}

// Render References
function renderReferences() {
    const referencesGrid = document.getElementById('references-grid');
    if (!referencesGrid) return;
    
    try {
        referencesGrid.innerHTML = bridgeData.references.map(ref => `
            <div class="reference-item fade-in">
                <div class="reference-number">[${ref.id}]</div>
                <div class="reference-content">
                    <span class="reference-authors">${ref.authors}</span>
                    (<span class="reference-year">${ref.year}</span>). 
                    <div class="reference-title">${ref.title}</div>
                    ${ref.url ? `<a href="${ref.url}" target="_blank" class="reference-link">View Source →</a>` : '<span class="reference-link" style="color: var(--color-text-secondary);">No URL available</span>'}
                    <span class="reference-type">${ref.type}</span>
                </div>
            </div>
        `).join('');
    } catch (error) {
        handleRenderError('references', error);
    }
}

// Download Report Function
function downloadReport() {
    // Create a notification since we can't actually serve files
    alert('Thank you for your interest in downloading the complete research report!\n\n' +
          'Report: "Bridge Substructures: Advanced Monitoring Technologies and Real-World Applications (2020-2025)"\n' +
          'Author: Raylen Williams\n' +
          'Format: PDF | Size: 2.1 MB | Pages: 32\n\n' +
          'In a real implementation, this would download the HiddenFoundation.pdf file containing the complete 32-page research report with detailed analysis, case studies, and implementation guidelines.');
}

// Improved scroll to section function
function scrollToSection(targetId) {
    console.log('Scrolling to section:', targetId); // Debug log
    
    const targetSection = document.getElementById(targetId);
    if (!targetSection) {
        console.error('Section not found:', targetId);
        return;
    }
    
    const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
    const offsetTop = targetSection.offsetTop - navHeight - 20;
    
    console.log('Target section offset:', targetSection.offsetTop, 'Nav height:', navHeight, 'Final offset:', offsetTop); // Debug log
    
    window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Technology Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            const techCards = document.querySelectorAll('.tech-card');
            techCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Navigation - Improved with better event handling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            console.log('Navigation clicked:', href); // Debug log
            
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                scrollToSection(targetId);
            }
        });
    });

    // Hero CTA buttons - Improved
    const scrollButtons = document.querySelectorAll('[data-scroll]');
    scrollButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.dataset.scroll;
            console.log('CTA button clicked:', targetId); // Debug log
            scrollToSection(targetId);
        });
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close mobile menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const bridgeType = document.getElementById('bridge-type').value;
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            alert('Thank you for your interest! Our bridge monitoring experts will contact you within 24 hours to discuss your specific needs.');
            
            // Reset form
            this.reset();
        });
    }

    // Active nav link highlighting on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 120; // Account for nav height

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements that should animate
    const animateElements = document.querySelectorAll('.tech-card, .case-study, .overview-card, .implementation-card, .reference-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Statistics counter animation
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = stat.textContent;
        const numericValue = parseInt(target.replace(/[^\d]/g, ''));
        
        if (!isNaN(numericValue) && numericValue > 0) {
            let current = 0;
            const increment = numericValue / 50; // 50 frames for smooth animation
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current);
                if (target.includes('%')) displayValue += '%';
                else if (target.includes('K')) displayValue += 'K';
                else if (target.includes('$')) displayValue = '$' + displayValue + 'K';
                
                stat.textContent = displayValue;
            }, 20); // 50fps
        }
    });
}

// Initialize statistics animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateStatistics, 500); // Small delay for effect
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Error handling for data rendering
function handleRenderError(section, error) {
    console.error(`Error rendering ${section}:`, error);
    const errorMessage = `<div style="text-align: center; padding: 2rem; color: var(--color-error);">
        <h3>Error Loading ${section}</h3>
        <p>Please refresh the page to try again.</p>
    </div>`;
    
    const containers = {
        'technologies': document.getElementById('tech-grid'),
        'case-studies': document.getElementById('case-studies-container'),
        'cost-comparison': document.getElementById('comparison-table'),
        'implementation': document.getElementById('implementation-grid'),
        'references': document.getElementById('references-grid')
    };
    
    const container = containers[section];
    if (container) {
        container.innerHTML = errorMessage;
    }
}

// Mobile menu styles injection
const mobileStyles = `
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(102, 51, 153, 0.98);
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding-top: 2rem;
        transition: left 0.3s ease;
        backdrop-filter: blur(10px);
        z-index: 999;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-menu li {
        margin: 1rem 0;
    }
    
    .nav-link {
        font-size: 1.2rem;
        padding: 1rem 2rem;
        display: block;
        width: 100%;
        text-align: center;
    }
    
    .nav-hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
}
`;

// Add mobile styles to the document
const styleElement = document.createElement('style');
styleElement.textContent = mobileStyles;
document.head.appendChild(styleElement);

// Export functions for potential external use
window.BridgeMonitoring = {
    scrollToSection,
    bridgeData,
    animateStatistics,
    downloadReport
};