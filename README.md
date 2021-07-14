# IonTimer

<img src="https://user-images.githubusercontent.com/52351749/125502495-3fcf7198-6143-458c-b1d2-9b6d4c4bbd4a.png" align="right" width="305" height="auto"/>

IonTimer, is a timer application developed using Ionic Framework and Angular. This project implements a timer application by following and extending on the ideas in the 
[Ionic Crash Course for Beginners](https://www.youtube.com/watch?v=qTdwUpQRptc&t=18s/) Youtube course.

### Built With

- [Ionic v5](https://ionicframework.com/docs) - Ionic Framework is the open-source mobile app development framework that makes it easy to build top quality native and progressive web apps with web technologies. 
- [Angular v11](https://angular.io/) - Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. 

<p align="center"> 
<a href="https://ionicframework.com/">
  <img src="https://user-images.githubusercontent.com/52351749/125533103-42a7d6df-5bc8-4b22-9a55-50884ff0633b.png"  width="30" height="auto" alt="Ionic 5"/>
</a>&nbsp;
  
<a href="https://angular.io/">
  <img src="https://user-images.githubusercontent.com/52351749/125533611-e9d579eb-75dc-487c-9785-ee2bbdffc097.png" width="30" height="auto" alt="Angular"/>
</a>&nbsp;
  
<a href="https://www.typescriptlang.org/">
  <img src="https://user-images.githubusercontent.com/52351749/125534740-8c24095c-d81a-402b-b2d8-4df690d22025.png"  width="30" height="auto" alt="TypeScript"/>
</a>&nbsp;
</p>  

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before proceeding, make sure your computer has [node.js and npm](https://nodejs.org/en/) installed. I recommend selecting the LTS version to ensure best compatibility.

- To check if it is installed:
```bash
node --version
npm --version
```
- Install the Ionic CLI globally:
```bash
npm install -g @ionic/cli
```
### Installation

Clone or download a copy of this repository:
```bash
# Clone
git clone https://github.com/enessfk/ionic-timer-app.git
```
`cd` into your project’s directory: <br>
```bash
cd ./your-project-directory
```
Install all dependencies listed in [`package.json`](./package.json):
```bash
npm install
```

### Run the project in your browser:
```bash
ionic serve
```
### Run the project on your device:
Install the cordova globally:
```bash
npm install -g cordova
```

Add an iOS or Android to the project:
```bash
ionic cordova platform add ios 
# or 
ionic cordova platform add android
```

Run the app on your device:
```bash
ionic cordova run ios
# or
ionic cordova run android
```

*For further information please read [ionic's deployment guide](https://ionicframework.com/docs/intro/deploying/).*

## Contributing
Want to contribute? Great!
To fix a bug or enhance an existing module, follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/enhanced-feature`)
3. Commit your Changes (`git commit -m 'Add some enhanced-feature'`)
4. Push to the Branch (`git push origin feature/enhanced-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

