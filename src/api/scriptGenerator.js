// export const generateScript = (projectDetails, stage) => {
//     const { projectType, language, framework, hosting, deployment } = projectDetails;
    
//     let script = "#!/bin/bash\n";
  
//     if (stage === "Planning") {
//       script += `echo "Setting up ${projectType} project with ${language} and ${framework}..."\n`;
//       if (language === "JavaScript" && framework === "React") {
//         script += "npx create-react-app my-app\n";
//       } else if (language === "Python" && framework === "Django") {
//         script += "python -m venv venv && source venv/bin/activate\npip install django\n";
//       }
//       script += "echo 'Project setup complete!'\n";
//     }
  
//     if (stage === "Development") {
//       script += `echo "Starting development environment for ${framework}..."\n`;
//       if (framework === "React") {
//         script += "npm install && npm start\n";
//       } else if (framework === "Django") {
//         script += "python manage.py runserver\n";
//       }
//       script += "echo 'Development server is running!'\n";
//     }
  
//     if (stage === "Testing") {
//       script += `echo "Running tests for ${framework}..."\n`;
//       if (framework === "React") {
//         script += "npm test\n";
//       } else if (framework === "Django") {
//         script += "python manage.py test\n";
//       }
//       script += "echo 'Testing completed!'\n";
//     }
  
//     if (stage === "Deployment") {
//       script += `echo "Deploying to ${hosting} using ${deployment}..."\n`;
//       if (hosting.includes("AWS")) {
//         script += "aws s3 sync build/ s3://my-bucket --delete\n";
//       } else if (hosting.includes("Azure")) {
//         script += "az webapp up --name my-webapp --resource-group my-group\n";
//       }
//       script += "echo 'Deployment successful!'\n";
//     }
  
//     if (stage === "Monitoring") {
//       script += `echo "Setting up monitoring for ${projectType}..."\n`;
//       script += "docker stats\n";
//       script += "top -bn1 | grep 'Cpu(s)'\n";
//       script += "free -m\n";
//       script += "echo 'Monitoring setup complete!'\n";
//     }
  
//     return script;
//   };
  
// export const generateScript = (projectDetails, stage) => {
//     const { projectName, projectType, language, framework, hosting, deployment } = projectDetails;

//     let script = "#!/bin/bash\n\n";

//     // Add general information
//     script += `# Project: ${projectName}\n`;
//     script += `# Type: ${projectType} | Language: ${language} | Framework: ${framework}\n`;
//     script += `# Hosting Platform: ${hosting} | Deployment: ${deployment}\n\n`;

//     // Stage-specific setup
//     if (stage === "Planning") {
//         script += "# Planning Setup\n";
//         script += "echo 'Planning phase started...'\n";
//         script += "echo 'Defining requirements and project structure...'\n";
//         script += "echo 'Planning complete!'\n";
//     }

//     if (stage === "Development") {
//         script += "# Development Setup\n";
//         script += "echo 'Setting up development environment...'\n";

//         // Web Projects
//         if (projectType === "Web") {
//             if (framework === "React") {
//                 script += "echo 'Initializing React project...'\n";
//                 script += "npx create-react-app my-app\n";
//                 script += "cd my-app\n";
//                 script += "npm install\n";
//                 script += "echo 'React project setup complete!'\n";
//             }
//             else if (framework === "Vue") {
//                 script += "echo 'Initializing Vue project...'\n";
//                 script += "npm install -g @vue/cli\n";
//                 script += "vue create my-app\n";
//                 script += "cd my-app\n";
//                 script += "npm install\n";
//                 script += "echo 'Vue project setup complete!'\n";
//             }
//         }

//         // Mobile Projects
//         if (projectType === "Mobile") {
//             if (framework === "React Native") {
//                 script += "echo 'Initializing React Native project...'\n";
//                 script += "npx react-native init MyApp\n";
//                 script += "cd MyApp\n";
//                 script += "npm install\n";
//                 script += "echo 'React Native project setup complete!'\n";
//             }
//             else if (framework === "Flutter") {
//                 script += "echo 'Initializing Flutter project...'\n";
//                 script += "flutter create my_app\n";
//                 script += "cd my_app\n";
//                 script += "flutter pub get\n";
//                 script += "echo 'Flutter project setup complete!'\n";
//             }
//         }

//         // API Projects
//         if (projectType === "API" && language === "Python" && framework === "Django") {
//             script += "echo 'Setting up Django project...'\n";
//             script += "django-admin startproject myproject\n";
//             script += "cd myproject\n";
//             script += "pip install -r requirements.txt\n";
//             script += "echo 'Django project setup complete!'\n";
//         } else if (projectType === "API" && language === "Node.js") {
//             script += "echo 'Setting up Node.js API project...'\n";
//             script += "mkdir my-api\n";
//             script += "cd my-api\n";
//             script += "npm init -y\n";
//             script += "npm install express\n";
//             script += "echo 'Node.js API setup complete!'\n";
//         }
//     }

//     if (stage === "Testing") {
//         script += "# Testing Setup\n";
//         script += "echo 'Running tests...'\n";

//         if (projectType === "Web" && framework === "React") {
//             script += "npm run test\n";
//             script += "echo 'React tests complete!'\n";
//         } else if (projectType === "API" && language === "Python" && framework === "Django") {
//             script += "python manage.py test\n";
//             script += "echo 'Django tests complete!'\n";
//         } else if (projectType === "API" && language === "Node.js") {
//             script += "npm test\n";
//             script += "echo 'Node.js tests complete!'\n";
//         }
//     }

//     if (stage === "Deployment") {
//         script += "# Deployment Setup\n";
//         script += "echo 'Deploying project...'\n";

//         // AWS Deployment
//         if (hosting === "AWS") {
//             script += "echo 'Deploying to AWS...'\n";
//             if (deployment === "CI/CD") {
//                 script += "aws deploy --project ${projectName} --region us-west-2\n";
//             } else if (deployment === "Manual") {
//                 script += "aws s3 cp my-app.zip s3://mybucket/\n";
//                 script += "aws cloudformation deploy --template-file cloudformation.yml\n";
//             } else if (deployment === "Containerized") {
//                 script += "docker build -t my-app .\n";
//                 script += "aws ecs update-service --cluster my-cluster --service my-service --force-new-deployment\n";
//             }
//         }
//         // Vercel Deployment
//         else if (hosting === "Vercel") {
//             script += "echo 'Deploying to Vercel...'\n";
//             script += "vercel deploy --prod\n";
//         }
//         // Netlify Deployment
//         else if (hosting === "Netlify") {
//             script += "echo 'Deploying to Netlify...'\n";
//             script += "netlify deploy --prod\n";
//         }
//     }

//     if (stage === "Monitoring") {
//         script += "# Monitoring Setup\n";
//         script += "echo 'Setting up monitoring tools...'\n";
//         script += "echo 'Integrating with CloudWatch (for AWS) or Datadog...'\n";
//         script += "echo 'Monitoring setup complete!'\n";
//     }

//     script += "\n# Project setup complete!\n";
//     return script;
// };

// import axios from "axios";

// export const getScripts = async (projectId, stageId) => {
//   if (!projectId || !stageId) {
//     console.error("Invalid projectId or stageId:", projectId, stageId);
//     return null;
//   }

//   const url = `http://localhost:8000/api/get_script/${projectId}/${stageId}/`;
//   console.log("Fetching script from:", url); // Debugging log

//   try {
//     const response = await axios.get(url);
//     console.log("Received script data:", response.data); // Log response
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       // Server responded with an error status
//       console.error(
//         "API Error:",
//         error.response.status,
//         error.response.data
//       );
//     } else if (error.request) {
//       // Request was made but no response received
//       console.error("No response received from API:", error.request);
//     } else {
//       // Something else went wrong
//       console.error("Error setting up request:", error.message);
//     }

//     return null; // Prevents crashes
//   }
// };
// export const generateScript = (projectDetails = {}, stage) => {
//     const { projectType, language, framework, hosting, deployment } = projectDetails;
  
//     let script = "#!/bin/bash\n";
  
//     if (stage === "Planning") {
//       script += `echo "Setting up ${projectType} project with ${language} and ${framework}..."\n`;
//       if (language === "JavaScript" && framework === "React") {
//         script += "npx create-react-app my-app\n";
//       } else if (language === "Python" && framework === "Django") {
//         script += "python -m venv venv && source venv/bin/activate\npip install django\n";
//       }
//       script += "echo 'Project setup complete!'\n";
//     }
  
//     if (stage === "Development") {
//       script += `echo "Starting development environment for ${framework}..."\n`;
//       if (framework === "React") {
//         script += "npm install && npm start\n";
//       } else if (framework === "Django") {
//         script += "python manage.py runserver\n";
//       }
//       script += "echo 'Development server is running!'\n";
//     }
  
//     if (stage === "Testing") {
//       script += `echo "Running tests for ${framework}..."\n`;
//       if (framework === "React") {
//         script += "npm test\n";
//       } else if (framework === "Django") {
//         script += "python manage.py test\n";
//       }
//       script += "echo 'Testing completed!'\n";
//     }
  
//     if (stage === "Deployment") {
//       script += `echo "Deploying to ${hosting} using ${deployment}..."\n`;
//       if (hosting.includes("AWS")) {
//         script += "aws s3 sync build/ s3://my-bucket --delete\n";
//       } else if (hosting.includes("Azure")) {
//         script += "az webapp up --name my-webapp --resource-group my-group\n";
//       }
//       script += "echo 'Deployment successful!'\n";
//     }
  
//     if (stage === "Monitoring") {
//       script += `echo "Setting up monitoring for ${projectType}..."\n`;
//       script += "docker stats\n";
//       script += "top -bn1 | grep 'Cpu(s)'\n";
//       script += "free -m\n";
//       script += "echo 'Monitoring setup complete!'\n";
//     }
  
//     return script;
//   };
  
  