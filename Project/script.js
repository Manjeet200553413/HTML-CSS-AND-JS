const button = document.querySelector('button');
const productImage = document.querySelector('.main-product img');
const legacyLink = document.querySelector('.legacy h6 a');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
});
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
});
productImage.addEventListener('mouseover', () => {
    productImage.style.transform = 'scale(1.05)';
});
productImage.addEventListener('mouseout', () => {
    productImage.style.transform = 'scale(1)';
});
legacyLink.addEventListener('mouseover', () => {
    legacyLink.style.color = 'royalblue';
});
legacyLink.addEventListener('mouseout', () => {
    legacyLink.style.color = 'black';
});
const navbarLinks = document.querySelectorAll('.mainhead div h4 a');
navbarLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'color 0.3s';
    link.style.color = 'blue';
  });
  link.addEventListener('mouseout', () => {
    link.style.transition = 'color 0.3s';
    link.style.color = 'whitesmoke';
  });
});
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transition = 'background-color 0.3s, border-color 0.3s';
    button.style.backgroundColor = 'blue';
    button.style.borderColor = 'darkblue';
    button.style.color = 'white';
  });
  button.addEventListener('mouseout', () => {
    button.style.transition = 'background-color 0.3s, border-color 0.3s';
    button.style.backgroundColor = 'rgb(0, 0, 0)';
    button.style.borderColor = 'rgb(0, 0, 0)';
    button.style.color = 'white';
  });
});
const headerImage = document.querySelector('.abouthead img');
headerImage.addEventListener('mouseover', () => {
  headerImage.style.transition = 'transform 0.3s';
  headerImage.style.transform = 'scale(1.05)';
  headerImage.style.opacity = '0.8';
});
headerImage.addEventListener('mouseout', () => {
  headerImage.style.transition = 'transform 0.3s';
  headerImage.style.transform = 'scale(1)';
  headerImage.style.opacity = '1';
});
const subHeaderImage = document.querySelector('.subhead img');
let rotationAngle = 0;
subHeaderImage.addEventListener('mouseover', () => {
  rotationAngle += 10;
  subHeaderImage.style.transition = 'transform 0.3s';
  subHeaderImage.style.transform = `rotate(${rotationAngle}deg)`;
  subHeaderImage.style.opacity = '0.8';
});
subHeaderImage.addEventListener('mouseout', () => {
  subHeaderImage.style.transition = 'transform 0.3s';
  subHeaderImage.style.transform = 'rotate(0deg)';
  subHeaderImage.style.opacity = '1';
});
const footerLinks = document.querySelectorAll('.footer .row a');
footerLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'text-decoration 0.3s';
    link.style.textDecoration = 'underline';
    link.style.color = 'blue';
  });
  link.addEventListener('mouseout', () => {
    link.style.transition = 'text-decoration 0.3s';
    link.style.textDecoration = 'none';
    link.style.color = 'gray';
  });
});
