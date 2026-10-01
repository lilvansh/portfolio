import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    id: 'av-production-designer',
    title: 'AV Production Designer',
    shortTitle: 'AV Production Designer',
    subtitle: 'A visual engineering workspace for planning professional event-production systems.',
    year: 'Current',
    categories: ['Software', 'AV Systems', 'System Design'],
    featured: true,
    published: true,
    status: 'In Development',
    statusNote: 'Actively evolving through a modular product roadmap.',
    shortDescription:
      'A data-driven planning tool for arranging rooms, equipment, signal paths, cabling, power, and technical documentation before an event build begins.',
    description:
      'AV Production Designer is an engineering product concept and active software project focused on unifying physical layout planning with system wiring. Instead of separating floor plans, equipment inventories, cable routes, and port-level diagrams across different tools, the product is designed around one connected model of the production system.',
    problem:
      'Large AV systems become difficult to reason about when room layout, equipment placement, signal routing, cable lengths, power, and troubleshooting notes live in separate documents—or only in the crew’s memory.',
    solution:
      'Create a visual workspace where equipment, ports, cable paths, room dimensions, signal flow, and deployment notes can be modeled together and reused across events.',
    role: 'Product designer and developer',
    challenges: [
      'Representing real equipment, ports, and connections as reusable typed data.',
      'Keeping room layout, wiring diagrams, and cable records consistent as a design changes.',
      'Designing interactions that remain clear even when technical diagrams become dense.',
    ],
    implementation: [
      'Structured the product around reusable equipment, space, connection, and cable entities.',
      'Designed a roadmap spanning 2D/3D planning, wiring diagrams, equipment libraries, and PDF-ready documentation.',
      'Separated technical content from interface components so the system can expand without redesigning the core experience.',
    ],
    learnings: [
      'Complex engineering tools become easier to scale when the underlying system model is designed before the interface details.',
      'Physical deployment constraints—ports, cable lengths, access, power, and height—must be treated as first-class product data.',
    ],
    future: [
      'Port-level equipment models and reusable rack templates.',
      'Cable-length validation and signal-path diagnostics.',
      'Speaker coverage, projector throw, rigging, and power-planning views.',
      'Cloud-synced project files and technical PDF exports.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'System Design', 'AV Systems'],
    skills: ['Product Architecture', 'Technical UX', 'Data Modeling', 'Hardware/Software Integration'],
    coverImage: 'images/projects/av-production-designer/cover.svg',
    coverAlt: 'Abstract interface showing an AV system floor plan connected to a wiring diagram.',
    images: [
      {
        src: 'images/projects/av-production-designer/architecture.svg',
        alt: 'Architecture diagram linking room planning, equipment data, wiring, and deployment documentation.',
        caption: 'A unified project model connects layout decisions to technical system documentation.',
      },
    ],
    systemFlow: [
      { label: 'Room + Equipment', detail: 'Physical constraints and reusable devices' },
      { label: 'Layout Engine', detail: 'Placement, scale, orientation, and coverage' },
      { label: 'System Model', detail: 'Ports, signal, power, and network relationships' },
      { label: 'Wiring Plan', detail: 'Routes, cable records, and validation' },
      { label: 'Deployment', detail: 'Crew-ready documentation' },
    ],
    connections: ['Software', 'Equipment', 'Signal', 'Network', 'Power', 'Documentation'],
    accent: 'orange',
  },
  {
    id: 'vision-guided-robotic-handling',
    title: 'Vision-Guided Robotic Handling System',
    shortTitle: 'Robotic Handling System',
    subtitle: 'An industrial automation project for moving a manual placement step into a robot-assisted workflow.',
    year: 'Current',
    categories: ['Robotics', 'Automation', 'AI / Computer Vision'],
    featured: true,
    published: true,
    status: 'In Development',
    statusNote: 'Team engineering project; implementation details will be updated as work progresses.',
    shortDescription:
      'A developing system concept combining a TM robot, computer vision, calibration, coordinate transforms, and conveyor integration.',
    description:
      'This team project explores how a robot can identify a part, establish its location in a shared coordinate system, and place it into the next stage of a production workflow. The portfolio intentionally distinguishes planned architecture from validated results.',
    problem:
      'A repetitive part-placement step currently depends on manual handling. A useful automation system must locate the part reliably, translate camera information into robot coordinates, and place it safely within the production process.',
    solution:
      'Develop a vision-guided robotic workflow that detects the part, calibrates camera and robot reference frames, computes a target pose, and executes a controlled placement sequence.',
    role: 'Student engineering team contributor',
    challenges: [
      'Aligning camera, robot, and work-cell coordinate systems.',
      'Designing a calibration process that can be repeated and verified.',
      'Handling detection uncertainty and defining safe failure states.',
      'Integrating robot motion with the surrounding production workflow.',
    ],
    implementation: [
      'Define the sensing, calibration, transformation, motion, and verification stages before programming the full cell.',
      'Document assumptions and test boundaries so planned behavior is separated from demonstrated behavior.',
    ],
    learnings: [
      'Automation quality depends as much on calibration, verification, and failure handling as it does on motion programming.',
    ],
    future: [
      'Validate object detection under production lighting and orientation changes.',
      'Measure placement repeatability after camera-to-robot calibration.',
      'Add PLC or line-control handshaking as the surrounding process is defined.',
    ],
    technologies: ['TM Robot', 'Computer Vision', 'Calibration', 'Coordinate Systems', 'Sensors', 'Industrial Automation'],
    skills: ['Robot Programming', 'System Integration', 'Computer Vision', 'Test Planning'],
    coverImage: 'images/projects/robotic-handling/cover.svg',
    coverAlt: 'Technical illustration of a camera guiding a robot arm toward a conveyor part.',
    images: [
      {
        src: 'images/projects/robotic-handling/architecture.svg',
        alt: 'System diagram showing a camera, vision processing, coordinate transformation, robot controller, and robot action.',
        caption: 'The planned control path from visual input to verified robot motion.',
      },
    ],
    systemFlow: [
      { label: 'Camera', detail: 'Acquire the work-cell image' },
      { label: 'Vision', detail: 'Detect and localize the target' },
      { label: 'Transform', detail: 'Map camera coordinates to the robot frame' },
      { label: 'Robot Control', detail: 'Plan and execute motion' },
      { label: 'Verification', detail: 'Confirm the placement state' },
    ],
    connections: ['Camera', 'Vision', 'Calibration', 'Robot', 'Conveyor', 'Safety Logic'],
    accent: 'purple',
  },
  {
    id: 'live-production-systems',
    title: 'Live Production Systems Engineering',
    shortTitle: 'Live Production Systems',
    subtitle: 'Portable audio, video, wireless, networking, and control systems designed for dependable events.',
    year: 'Ongoing',
    categories: ['AV Systems', 'Automation', 'Hardware'],
    featured: true,
    published: true,
    status: 'Active',
    shortDescription:
      'System planning and technical operations across digital audio, wireless microphones, video switching, networking, monitoring, and deployment workflows.',
    description:
      'This work treats live production as a complete engineering system rather than a collection of devices. The focus is signal continuity, repeatable setup, clear routing, crew readiness, fast fault isolation, and a control surface that makes the system understandable under time pressure.',
    problem:
      'A single failed cable, incorrect route, network issue, or gain decision can affect an entire event. Complex systems become fragile when documentation and verification are informal.',
    solution:
      'Design the production system around documented signal paths, labeled connections, pre-event verification, structured troubleshooting, remote monitoring, and repeatable operating workflows.',
    role: 'AV systems design and technical operations',
    challenges: [
      'Tracing failures across linked audio, video, network, and control paths.',
      'Balancing high channel counts with fast, understandable operator workflows.',
      'Managing wireless, feedback, gain structure, monitoring, and room coverage together.',
      'Designing a portable system that can be deployed consistently in different spaces.',
    ],
    implementation: [
      'Mapped core audio, video, wireless, network, and control subsystems into a single deployment model.',
      'Developed checklist-driven verification for cables, routes, device communication, and signal presence.',
      'Explored control automation, status alerts, overlays, and remote monitoring to reduce operator load.',
    ],
    learnings: [
      'The fastest troubleshooting begins with an accurate mental and documented model of the entire signal path.',
      'Repeatability improves when setup knowledge is converted into system labels, diagrams, and verification steps.',
    ],
    future: [
      'Automated cable and route verification.',
      'Device discovery and health monitoring across the production network.',
      'More structured calibration workflows for level, delay, and coverage.',
    ],
    technologies: ['Midas M32C', 'Midas DL32', 'Sennheiser EW-DX', 'ATEM', 'OBS', 'Companion', 'Networking'],
    skills: ['Signal Flow', 'Systems Troubleshooting', 'Networking', 'Technical Operations'],
    coverImage: 'images/projects/live-production/cover.svg',
    coverAlt: 'Technical rack and signal-flow illustration for a portable live production system.',
    images: [
      {
        src: 'images/projects/live-production/architecture.svg',
        alt: 'Diagram connecting stage inputs, audio processing, wireless, video control, network control, and audience outputs.',
        caption: 'A systems view makes routing, monitoring, and fault isolation more predictable.',
      },
    ],
    systemFlow: [
      { label: 'Stage Inputs', detail: 'Microphones, playback, cameras, and sources' },
      { label: 'Signal Core', detail: 'Mixing, routing, switching, and processing' },
      { label: 'Control Network', detail: 'Remote operation, status, and automation' },
      { label: 'Distribution', detail: 'Speakers, streams, displays, and records' },
      { label: 'Verification', detail: 'Monitoring and fault isolation' },
    ],
    connections: ['Audio', 'Video', 'Wireless', 'Network', 'Control', 'Power'],
    accent: 'steel',
  },
  {
    id: 'smart-event-photo-system',
    title: 'Smart Event Photo Queue & Delivery',
    subtitle: 'A concept for coordinating photo capture, group matching, and automated delivery at high-throughput events.',
    year: 'Concept',
    categories: ['AI / Computer Vision', 'Software', 'Automation'],
    featured: false,
    published: true,
    status: 'Concept',
    shortDescription:
      'A camera-and-queue workflow designed to connect guest order, photo capture, group identification, review, and delivery.',
    description:
      'The system concept explores how multiple cameras, a managed queue, group identification, and automatic delivery could reduce manual coordination during event photography.',
    problem:
      'High-volume event photography requires people, groups, images, and contact details to stay correctly matched as the line moves.',
    solution:
      'Model each guest or group as a queue item connected to camera captures, review status, and a delivery destination.',
    role: 'System concept and workflow design',
    challenges: [
      'Preserving identity and consent across capture and delivery.',
      'Handling groups, retakes, and multiple camera sources without losing traceability.',
      'Designing a workflow that remains fast for operators and simple for guests.',
    ],
    future: ['Prototype the queue state model.', 'Test camera ingestion and review workflows.', 'Evaluate privacy-preserving matching options.'],
    technologies: ['Computer Vision', 'Queue Design', 'Camera Systems', 'Workflow Automation'],
    coverImage: 'images/projects/photo-queue/cover.svg',
    coverAlt: 'Concept diagram for a photo queue linked to cameras and delivery.',
    systemFlow: [
      { label: 'Check-In' },
      { label: 'Queue' },
      { label: 'Capture' },
      { label: 'Match + Review' },
      { label: 'Delivery' },
    ],
    connections: ['People', 'Queue', 'Cameras', 'Matching', 'Review', 'Delivery'],
    accent: 'purple',
  },
  {
    id: 'hotel-operations-dashboard',
    title: 'Hotel Operations & Marketing Dashboard',
    subtitle: 'A product concept for coordinating property operations, outreach, guest communication, and marketing decisions.',
    year: 'Concept',
    categories: ['Software', 'Automation'],
    featured: false,
    published: true,
    status: 'Concept',
    shortDescription:
      'A dashboard concept combining operational tasks, local demand signals, outreach tracking, and guest-facing digital experiences.',
    description:
      'This concept frames hotel operations as a connected information problem: work orders, marketing opportunities, guest communications, pricing context, and property improvements should be visible in one workflow.',
    problem:
      'Property operations and local business outreach can become fragmented across notes, calls, spreadsheets, and disconnected systems.',
    solution:
      'Create an operations dashboard with structured follow-up, campaign planning, guest-experience content, and a clear view of active priorities.',
    role: 'Product concept and workflow design',
    challenges: [
      'Turning varied operational work into a useful shared data model.',
      'Separating actionable signals from background information.',
      'Designing for staff members with different levels of technical comfort.',
    ],
    future: ['Define the minimum viable data model.', 'Prototype the outreach and property-task workflows.', 'Validate which integrations are available.'],
    technologies: ['Dashboard Design', 'Workflow Automation', 'Analytics', 'UX'],
    coverImage: 'images/projects/hotel-dashboard/cover.svg',
    coverAlt: 'Concept dashboard showing property operations and outreach activity.',
    connections: ['Operations', 'Outreach', 'Guest Experience', 'Analytics', 'Tasks'],
    accent: 'orange',
  },
  {
    id: 'vision-assisted-poker-tracker',
    title: 'Vision-Assisted Poker Tracking System',
    subtitle: 'A concept for combining table state, player actions, chip records, and camera input in one live interface.',
    year: 'Concept',
    categories: ['Software', 'AI / Computer Vision'],
    featured: false,
    published: true,
    status: 'Concept',
    shortDescription:
      'A table-management product concept for tracking players, buy-ins, actions, hands, and camera-assisted game state.',
    description:
      'The concept explores a multi-device interface where a phone or camera helps record table state while an external display communicates the current hand and player information.',
    problem:
      'Live game records are difficult to maintain without interrupting play, especially when buy-ins, actions, cards, and player history are tracked separately.',
    solution:
      'Use a structured event model for player actions and optional camera assistance for table-state capture, with a dedicated operator view and audience display.',
    role: 'Product concept and system design',
    challenges: [
      'Representing a changing game state accurately and reversibly.',
      'Avoiding overreliance on uncertain visual detection.',
      'Designing separate interfaces for players, operators, and displays.',
    ],
    future: ['Build the action and hand-state engine.', 'Prototype the external display.', 'Evaluate camera-assisted features separately from core tracking.'],
    technologies: ['Computer Vision', 'Real-Time State', 'Data Modeling', 'Multi-Device UX'],
    coverImage: 'images/projects/poker-tracker/cover.svg',
    coverAlt: 'Concept interface for tracking a live poker table and player state.',
    connections: ['Players', 'Game State', 'Camera', 'Operator View', 'Display'],
    accent: 'steel',
  },
]

export const publishedProjects = projects.filter((project) => project.published)
export const featuredProjects = publishedProjects.filter((project) => project.featured)
