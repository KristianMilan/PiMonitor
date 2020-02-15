# PiMonitor

A cross-platform desktop application that remotely monitors your raspberry Pi/s.

## Dependencies Used

-   dotenv = to store environment variables, aka the connection settings to the Raspberry pi.
-   node-ssh - to access the Pi remotely with the SSH protocol.

## Introduction / Story

I recently purchased a 3D printer and have set up OctoPi on it to remotely control the Printer from any device remotely. While this in itself is a great tool, I wanted to monitor the Raspberry Pi itself; such as the temperature, CPU usage, RAM usage; essentially a System Monitor. So I created this application with Electron, and I plan to create a web-based version and a mobile-app version that you can remotely monitor your Pi from anywhere at any time.

## How it Works

PiMonitor uses the package node-ssh to communicate to the Pi remotely with SSH. <br />
From this we can execute commands to the Pi, granted we are logged in and have access to do so. <br />
node-ssh allows to get the output from these commands, which I parse into the application in a nice, user-friendly interface.

## Getting Started

1. <code>git clone https://github.com/JohnAntonios/PiMonitor</code>
2. Create a .env folder in the root directory.
3. The .env file needs 3 components:
    - <strong>HOST</strong>: This refers to your Raspberry Pi's name or its IP Address on your local network.
    - <strong>USER</strong>: This refers to the username that you want to login as.
    - <strong>PASSWORD</strong>: This refers to the password that you need to login with the above username on the Raspberry Pi.
4. The contents of the .env file should look like the following:
   <br>
   <code>
   HOST = IP Address or Raspberry PI name goes here \
    USER = username \
    PASSWORD = Supersecretpassword
   </code>
   <br>
5. Open a terminal window and type in: <code> npm run start </code>
6. You did it!
