import { MainApp } from './Api/MainApp';

try {
    new MainApp().start();
} catch (e) {
    process.exit(1);
}

process.on('uncaughtException', (err) => {
    console.log('::: UPS ::: uncaught exception throwed', err);
    process.exit(1);
});
