import { exec } from 'child_process';
import path from "path";

export default async (req, res) => {
  try {
    const pythonFile = '../../main.py';
    const scriptPath = path.resolve(__dirname, pythonFile); // Resolve the relative path
    process.chdir(path.dirname(scriptPath));

    exec(`python ${pythonFile}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        res.status(500).json({ error: 'Error executing Python script' });
      } else {
        console.log(`Python script output: ${stdout}`);
        res.status(200).json({ message: 'Python script executed successfully' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
