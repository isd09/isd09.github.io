const members = document.querySelectorAll('.circle-member');
const visibleCount = 10; // Number of visible members at once
const scrollOffset = 0.4 * window.innerHeight / (members.length - visibleCount + 1);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  members.forEach((member, index) => {
    const memberPositionStart = index * scrollOffset;
    const memberPositionEnd = memberPositionStart + (visibleCount * scrollOffset);

    if (scrollTop >= memberPositionStart + 1 && scrollTop < memberPositionEnd) {
      member.classList.add('visible');
    } else {
      member.classList.remove('visible');
    }
  });
});

window.addEventListener('scroll', function () {
  var invitation = this.document.getElementById('invitation');
  var roundtable = this.document.getElementById('roundtable');
  var missionStatement = this.document.getElementById('mission-statement');
  if (window.scrollY > 2900 && this.window.scrollY < 5000) {  // Change this value to adjust when it appears
    roundtable.classList.add('invisible');
    missionStatement.classList.add('visible');
  } else if (this.window.scrollY >= 5000 && this.window.scrollY < 6000) {
    missionStatement.classList.add('visible');
    invitation.classList.remove('visible');
    roundtable.classList.add('invisible');
  } else if (this.window.scrollY >= 6000) {
    invitation.classList.add('visible');
    missionStatement.classList.remove('visible');
    roundtable.classList.add('invisible');
  } else {
    roundtable.classList.remove('invisible');
    missionStatement.classList.remove('visible');
    invitation.classList.remove('visible');
  }
});

window.onload = function () {
  window.scrollTo(top);
}