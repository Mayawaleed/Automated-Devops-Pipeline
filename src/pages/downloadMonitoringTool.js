// import React from 'react';
// import styles from '../styles/Download.module.css';

// const DownloadMonitoringTool = () => {
//     return (
//         <div className={styles.container}>
//             <h1 className={styles.title}>Download Monitoring Tool</h1>
//             <p className={styles.description}>
//                 Download our powerful tool to start monitoring your system.
//             </p>
//             <div className={styles.buttonContainer}>
//                 <a
//                     href="https://drive.google.com/uc?export=download&id=1pWNJari-Dj-FYnvKkEVWp8H9U4iXaT-K" // Direct download link
//                     download
//                     className={styles.downloadButton}
//                 >
//                     Download Now
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default DownloadMonitoringTool;

import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const instructions = {
  Windows: [
    { step: 'Download the monitoring tool', command: 'Download via the button above.' },
    { step: 'Open Command Prompt', command: 'cd C:\\Users\\<YourUsername>\\Downloads' },
    { step: 'Activate virtual environment (if exists)', command: '.\\venv\\Scripts\\activate' },
    { step: 'Create virtual environment (if not exists)', command: 'python -m venv venv' },
    { step: 'Install requirements', command: 'pip install -r requirements.txt' },
    { step: 'Run the monitoring script', command: 'python monitor.py' }
  ],
  macOS: [
    { step: 'Download the monitoring tool', command: 'Download via the button above.' },
    { step: 'Open Terminal', command: 'cd ~/Downloads' },
    { step: 'Create virtual environment', command: 'python3 -m venv venv' },
    { step: 'Activate virtual environment', command: 'source venv/bin/activate' },
    { step: 'Install requirements', command: 'pip install -r requirements.txt' },
    { step: 'Run the monitoring script', command: 'python3 monitor.py' }
  ],
  Linux: [
    { step: 'Download the monitoring tool', command: 'Download via the button above.' },
    { step: 'Open Terminal', command: 'cd ~/Downloads' },
    { step: 'Create virtual environment', command: 'python3 -m venv venv' },
    { step: 'Activate virtual environment', command: 'source venv/bin/activate' },
    { step: 'Install requirements', command: 'pip install -r requirements.txt' },
    { step: 'Run the monitoring script', command: 'python3 monitor.py' }
  ]
};

const DownloadMonitoringTool = () => {
  const [selectedOS, setSelectedOS] = useState('Windows');

  const handleTabChange = (event, newValue) => {
    setSelectedOS(newValue);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        Download Monitoring Tool
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Follow the steps below to set up the monitoring script on your operating system.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="http://35.179.146.101:8000/download-monitor/"
        sx={{ mb: 4 }}
      >
        Download Now
      </Button>

      <Tabs
        value={selectedOS}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 3 }}
      >
        {Object.keys(instructions).map((os) => (
          <Tab label={os} value={os} key={os} />
        ))}
      </Tabs>

      {instructions[selectedOS].map((item, index) => (
        <Card key={index} sx={{ mb: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">{item.step}</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
              <Typography
                component="code"
                sx={{
                  fontFamily: 'monospace',
                  background: '#f4f4f4',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  overflowWrap: 'anywhere'
                }}
              >
                {item.command}
              </Typography>
              {item.command !== 'Download via the button above.' && (
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => copyToClipboard(item.command)}
                  startIcon={<ContentCopyIcon />}
                  sx={{ ml: 2 }}
                >
                  Copy
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DownloadMonitoringTool;
