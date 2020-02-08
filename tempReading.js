require("dotenv").config();
const nodeSSH = require("node-ssh"),
	chalk = require("chalk"),
	ssh = new nodeSSH();

const MAX_TEMP = 80;

const options = {
	host: process.env.HOST,
	username: process.env.USER,
	password: process.env.PASSWORD
};

const reading = document.getElementById("reading");

const startSSH = () => {
	ssh.connect(options)
		.then(() => {
			checkTemperature(ssh);
		})
		.catch(err => console.error(err));
};

const checkTemperature = sshInstance => {
	sshInstance
		.execCommand("vcgencmd measure_temp")
		.then(res => {
			const rawReading = res.stdout;
			const temp = +rawReading.split("=")[1].split("'")[0];
			const isBelow = temp < MAX_TEMP;
			const currentTime = new Date(Date.now()).toLocaleTimeString();
			console.log(
				`Current Temperature: ${chalk.yellow(
					temp + "℃"
				)}\tat ${currentTime}\nBelow maximum temperature (${MAX_TEMP}): ${
					isBelow ? chalk.green("Yes!") : chalk.red("NO!")
				}\n`
			);

			reading.textContent = temp;

			const repeated = setInterval(() => {
				checkTemperature(sshInstance);
				clearInterval(repeated);
			}, 2000);
		})
		.catch(err => console.error(err));
};
