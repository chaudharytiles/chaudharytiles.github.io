const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
  const target = +counter.dataset.target;
  let count = 0;
  const speed = target / 60;

  const update = () => {
    if (count < target) {
      count += speed;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      runCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.6});

counters.forEach(c => observer.observe(c));
function calc(){
  let rate = +service.value;
  let areaVal = +area.value;
  let total = rate * areaVal;

  if(document.getElementById("gst").checked){
    total += total * 0.18;
  }

  document.getElementById("total").innerText =
    total.toLocaleString("en-IN");
}

service.onchange = area.oninput = calc;
