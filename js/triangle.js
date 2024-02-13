// Obj : get base, height of a triangle, calculate the area by using provided formula, and then display the area.

function calculateTriangelArea() {
    const triangleBase =   document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText);
  console.log( base);


  const triangleHeightInput = document.getElementById('triangle-height')
  const triangleHeightText = triangleHeightInput.value
  const height = parseFloat(triangleHeightText)

  const area = 0.5 * base * height;


  const triangleAreaSpan = document.getElementById('triangle-area');

  triangleAreaSpan.innerText = area;
}
