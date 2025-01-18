const members = document.querySelectorAll('.circle-member');
    const visibleCount = 10; // Number of visible members at once
    const scrollOffset = 0.4*window.innerHeight / (members.length - visibleCount + 1);

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;

      members.forEach((member, index) => {
        const memberPositionStart = index * scrollOffset;
        const memberPositionEnd = memberPositionStart + (visibleCount * scrollOffset);

        if (scrollTop >= memberPositionStart && scrollTop < memberPositionEnd) {
          member.classList.add('visible');
        } else {
          member.classList.remove('visible');
        }
      });
    });

 window.addEventListener('scroll', function() {
      var hiddenDiv = document.getElementById('invitation');
      if (window.scrollY > 3300) {  // Change this value to adjust when it appears
        hiddenDiv.style.visibility = 'visible';  // Make the div visible in layout
        hiddenDiv.style.opacity = '1';  // Fade it in
      } else {
        hiddenDiv.style.opacity = '0';  // Fade it out
        hiddenDiv.style.visibility = 'hidden';  // Hide it completely after fade-out
      }
    });