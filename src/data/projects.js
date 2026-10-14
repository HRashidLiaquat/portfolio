export const research = [
  {
    title: "Self-Supervised Speed Breaker & Pothole Anticipation",
    type: "MS thesis project",
    role: "Joint work with Umer Farooq",
    status: "In progress",
    summary: "Predicts unmarked speed breakers and potholes before impact using a phone's camera, GPS and motion sensors. Training labels come from the vehicle's own response to the road, so no manual labeling is needed.",
    tags: ["Computer Vision", "Self-Supervised Learning", "Sensor Fusion"],
    flow: [
      { title: "Record", note: "Phone camera, GPS and IMU on a rigid mount" },
      { title: "Detect the event", note: "GPS speed dip plus accelerometer spike; gyroscope confirms" },
      { title: "Label", note: "The vehicle's response marks the bump or pothole" },
      { title: "Extract frames", note: "Video from 2 to 3 seconds before the event" },
      { title: "Train", note: "A lean vision model learns what the road looks like before a hit" },
      { title: "Anticipate", note: "Warn before impact and add the spot to a hazard map" },
    ],
    path: [
      { stage: "My MS thesis", state: "In progress", text: "Data collection with a rigidly mounted phone, sensor calibration, self-labeling pipeline, and the vision model." },
      { stage: "Research paper", state: "Planned", text: "A paper by Rashid Liaquat (first author) and Umer Farooq (second author) on self-supervised road-hazard anticipation using vehicle response as the label, aimed at a computer vision or intelligent transport venue." },
      { stage: "Joint product", state: "Planned", text: "A rider or fleet safety device: a small sensor unit with a GPS hazard map that warns before known bumps, built on the thesis models." },
    ],
    details: [
      { label: "Problem", text: "Many speed breakers and potholes on Pakistani roads are unmarked and unmapped, so drivers and navigation apps cannot see them coming." },
      { label: "Approach", text: "The vehicle's own response is used as the label. A dip in GPS speed together with a spike in the accelerometer marks a road event, and the gyroscope confirms it. Video frames from 2 to 3 seconds before the event are then extracted and used to train a lean vision model that recognises the road ahead." },
      { label: "Data", text: "A phone fixed rigidly to the vehicle records camera video, GPS and IMU readings (accelerometer and gyroscope). A rigid mount is required, because a gimbal would remove the vibration signal the labels depend on." },
      { label: "Why it matters", text: "No manual labeling is needed, and the model learns from local road conditions instead of foreign datasets." },
      { label: "Status", text: "Data collection and sensor calibration are the next steps. No results are claimed yet." },
    ],
    link: "",
  },
  {
    title: "Motorcycle-Aware Collision Warning",
    type: "Joint project",
    role: "Umer Farooq's MS thesis",
    status: "In progress",
    summary: "Detection and tracking of motorcycles and rickshaws in dense traffic, with a collision warning layer on top.",
    tags: ["Object Detection", "Tracking", "Road Safety"],
    flow: [
      { title: "Record", note: "Road video from a stabilized camera" },
      { title: "Annotate", note: "Boxes on motorcycles and rickshaws" },
      { title: "Detect", note: "A detector finds them in each frame" },
      { title: "Track", note: "Each vehicle keeps its identity across frames" },
      { title: "Estimate", note: "Time to collision from distance and speed" },
      { title: "Warn", note: "Alert when the time falls below a safe limit" },
    ],
    path: [
      { stage: "Umer's MS thesis", state: "In progress", text: "Annotated road video, detection and tracking of motorcycles and rickshaws, and time-to-collision estimation." },
      { stage: "Research paper", state: "Planned", text: "A paper by Umer Farooq (first author) and Rashid Liaquat (second author) on motorcycle-aware collision warning in dense, mixed traffic, with results on locally collected data." },
      { stage: "Joint product", state: "Planned", text: "A collision warning aid for riders and drivers that works in mixed traffic like Pakistan's." },
    ],
    details: [
      { label: "Problem", text: "Motorcycles and rickshaws weave through dense traffic and are often missed by systems built for cars and lanes." },
      { label: "Approach", text: "Supervised detection and tracking of motorcycles and rickshaws, then estimation of time to collision to trigger a warning before a risky situation develops." },
      { label: "Data", text: "Road video from a phone camera, annotated manually with bounding boxes. A gimbal is used to keep footage stable." },
      { label: "Status", text: "In progress under Umer Farooq. No results are claimed yet." },
    ],
    link: "",
  },
];

export const projects = [
  {
    title: "Plant Disease Classification with Vision Transformer",
    type: "Project",
    role: "",
    status: "Completed",
    summary: "Classifies leaf images into 38 classes from the PlantVillage dataset using a Vision Transformer with transfer learning in PyTorch and Hugging Face Transformers.",
    tags: ["Vision Transformer", "Transfer Learning", "PyTorch"],
    image: { src: "/img/agri.jpg", alt: "Eight sample leaf images from PlantVillage, each labeled with its plant and disease class", caption: "Sample leaves from PlantVillage, with class labels." },
    metrics: { validation: "92.27%" },
    link: "https://github.com/HRashidLiaquat/lessons-learned/blob/main/Agri.ipynb",
  },
  {
    title: "Goat Health Classification (CRNN from Scratch)",
    type: "Project",
    role: "",
    status: "Completed",
    summary: "Separates healthy from unhealthy goats using a CNN + LSTM (CRNN) model built from scratch in PyTorch, trained on 742 images and tested on 186.",
    tags: ["CNN", "RNN", "PyTorch"],
    image: { src: "/img/goat_curves.png", alt: "Line charts of training loss falling and training accuracy rising over 5 epochs, with the test accuracy shown as a dashed line", caption: "Training loss and accuracy over 5 epochs, with the final test accuracy." },
    metrics: { epochs: 5, train: "93.06%", test: "96.65%" },
    link: "https://github.com/HRashidLiaquat/lessons-learned/blob/Animal_CRNN/Animal.ipynb",
  },
  {
    title: "Fruit and Vegetable Classification with CNN",
    type: "Project",
    role: "",
    status: "Completed",
    summary: "Classifies 240 fruit and vegetable classes from the Fruits-360 dataset (100x100 images) with a CNN in PyTorch.",
    tags: ["CNN", "PyTorch", "Image Classification"],
    image: { src: "/img/fruits.jpg", alt: "Three sample fruit images from Fruits-360 on white backgrounds", caption: "Sample images from Fruits-360." },
    metrics: { epochs: 5, train: "80.51%", test: "95.05%" },
    link: "https://github.com/HRashidLiaquat/lessons-learned/blob/main/Fruits.ipynb",
  },
  {
    title: "Exam Score Prediction with Linear Regression",
    type: "Project",
    role: "",
    status: "Completed",
    summary: "A linear regression model built in PyTorch that predicts exam score from hours studied, following the full workflow: tensors, model, loss and optimizer, training loop, evaluation, a new prediction and saving the model.",
    tags: ["Linear Regression", "PyTorch", "Machine Learning Basics"],
    image: { src: "/img/regression.png", alt: "Scatter plot of exam score against hours studied with a fitted straight line and one new prediction", caption: "Fitted line and a new prediction for 8 hours of study. The figure is redrawn from the notebook's values." },
    metrics: { epochs: 6, loss: "0.2197" },
    link: "https://github.com/HRashidLiaquat/lessons-learned/blob/Regression_Project/RegressionProject.ipynb",
  },
  {
    title: "Fashion-MNIST Classification with Logistic Regression",
    type: "Project",
    role: "",
    status: "Completed",
    summary: "A logistic regression classifier in PyTorch that sorts 28x28 grayscale clothing images into 10 categories from the Fashion-MNIST dataset (60,000 training and 10,000 test images), trained with mini-batches and SGD.",
    tags: ["Logistic Regression", "PyTorch", "Image Classification"],
    image: { src: "/img/fashion.png", alt: "Two line charts showing training loss falling and training accuracy rising over 50 epochs", caption: "Training loss and accuracy over 50 epochs, plotted from the notebook's output." },
    metrics: { epochs: 50, train: "82.60%", test: "about 81%" },
    link: "https://github.com/HRashidLiaquat/lessons-learned/blob/Logstic_Regression_FashionMNIST/Demo1_Project_Reg.ipynb",
  },
];

export const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rashid-liaquat" },
  { label: "GitHub", href: "https://github.com/HRashidLiaquat" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=kOR2UOcAAAAJ" },
  { label: "ORCID", href: "https://orcid.org/0009-0007-4796-3065" },
  { label: "Medium", href: "https://medium.com/@rashid.liaquat68" },
  { label: "Kaggle", href: "https://www.kaggle.com/rashidliaquat" },
  { label: "Hugging Face", href: "https://huggingface.co/rashidliaquat" },
];

export const profile = {
  cvUrl: "", // put "/cv.pdf" here after adding public/cv.pdf
  photoUrl: "/photo.jpg", // put "/photo.jpg" here after adding public/photo.jpg
  email: "rashid.liaquat68@gmail.com",
  phone: "",
  phoneShown: "",
};

export const interests = [
  { title: "Self-supervised learning for roads", text: "Using a vehicle's own motion as the label so models learn local road conditions without manual annotation." },
  { title: "Sensor fusion", text: "Combining camera, GPS and IMU signals so each one covers the weakness of the others." },
  { title: "Embedded and edge AI", text: "Running small, efficient models on low-power hardware that can sit in a helmet or on a bike." },
  { title: "Vision in mixed traffic", text: "Detecting and tracking motorcycles, rickshaws and other road users that lane-based systems miss." },
];

export const skills = [
  { group: "Deep learning", items: ["PyTorch", "CNN", "RNN and CRNN", "Vision Transformer", "Transfer learning", "Hugging Face Transformers", "NLP"] },
  { group: "Sensing and signals", items: ["GPS", "Accelerometer and gyroscope (IMU)", "Sensor fusion", "Camera geometry basics"] },
  { group: "Tools", items: ["Python", "Jupyter and Colab", "Git and GitHub", "Kaggle"] },
  { group: "Currently learning", items: ["Embedded AI", "Classical vision before deep learning", "Model deployment on small devices"] },
];

export const education = [
  { what: "MS Artificial Intelligence", where: "Superior University, Lahore", note: "Started in Fall 2025.", supervisor: { name: "Dr. Arfan Jaffar", role: "Professor, Superior University", url: "https://www.linkedin.com/in/arfan-jaffar-07277b1a/" }, cosupervisor: { name: "Talha Nadeem", role: "PhD in AI, AHOY", url: "https://www.linkedin.com/in/talhanadeem496/" } },
];

export const findMe = [
  { label: "Code", text: "Notebooks and project code", href: "https://github.com/HRashidLiaquat" },
  { label: "Writing", text: "Articles on my learning and projects", href: "https://medium.com/@rashid.liaquat68" },
  { label: "Publications", text: "Google Scholar profile", href: "https://scholar.google.com/citations?user=kOR2UOcAAAAJ" },
  { label: "Competitions", text: "Kaggle profile", href: "https://www.kaggle.com/rashidliaquat" },
];

export const help = [
  { title: "Research collaboration", text: "Joining a research team on computer vision, self-supervised learning or sensor-based road safety, from literature review and experiments to co-authoring papers." },
  { title: "Image classification prototypes", text: "Building and evaluating CNN, CRNN and Vision Transformer classifiers in PyTorch, with transfer learning, augmentation and honest train and test reporting." },
  { title: "Sensor data experiments", text: "Collecting and cleaning camera, GPS and IMU data, and turning it into labeled datasets with simple, checkable rules before any model is trained." },
  { title: "Experiment write-ups", text: "Clear notebooks, figures and short reports that show what was tried, what the numbers are, and what still needs fixing." },
];

export const way = [
  { title: "Understand the problem", text: "Start from the real setting, such as Pakistani roads, and the data that can actually be collected there." },
  { title: "Start simple", text: "Build a baseline or a rule-based check first, so every later model has something to beat." },
  { title: "Measure honestly", text: "Report train and test results separately, and re-check any number that looks too good." },
  { title: "Share the work", text: "Keep code on GitHub with notebooks anyone can open and rerun." },
];

export const embedded = {
  lead: "My next focus is embedded AI: sensing and models that run on small, low-power hardware, right on the vehicle, without needing the internet.",
  why: "A road warning is only useful if it arrives in time. Sending video to a server is too slow and too costly for a rider on a bike, so the model has to live on the device.",
  thesis: "My thesis is built around this. Data is collected with a rigidly mounted phone, then the plan is a small sensor unit with a microcontroller, an IMU and GPS that logs rides, builds a GPS hazard map, and warns before known bumps. The vision model is kept lean so it can move onto small hardware.",
  steps: [
    { title: "Sensors", note: "Camera, GPS, IMU" },
    { title: "Microcontroller", note: "Logs and timestamps every signal" },
    { title: "Lean model", note: "Small enough for the device" },
    { title: "Warning", note: "A short vibration pulse to the rider" },
  ],
  state: "Planned. Data collection comes first; hardware choices follow what the data shows.",
};
