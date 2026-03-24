import { useRef, useEffect } from 'react';
import './Screenshots.css';

const screens = [
  { src: '/appss/Jurix1.png', label: 'Lawyer Discovery' },
  { src: '/appss/Jurix2.png', label: 'Lawyer Profile' },
  { src: '/appss/Jurix4.png', label: 'My Cases' },
  { src: '/appss/Jurix6.png', label: 'Encrypted Chat' },
  { src: '/appss/Jurix5.png', label: 'Smart Schedule' },
  { src: '/appss/Jurix8.png', label: 'Lawyer Dashboard' },
  { src: '/appss/Jurix9.png', label: 'Office Location' },
  { src: '/appss/Jurix3.png', label: 'Your Profile' },
];

export default function Screenshots() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      track.classList.add('dragging');
      startX.current = e.pageX - track.offsetLeft;
      scrollLeft.current = track.scrollLeft;
    };
    const onMouseUp = () => {
      isDragging.current = false;
      track.classList.remove('dragging');
    };
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      track.scrollLeft = scrollLeft.current - walk;
    };

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    track.addEventListener('mousemove', onMouseMove);
    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="ss-section" id="screenshots">
      <div className="ss-header">
        <div className="section-label">App Screenshots</div>
        <h2>See JuriX in Action</h2>
        <p>A real look at the app — from finding a lawyer to managing your case.</p>
      </div>
      <div className="ss-track" ref={trackRef}>
        {screens.map((screen, idx) => (
          <div key={idx} className="ss-item">
            <div className="ss-phone-frame">
              <div className="ss-phone-inner">
                <img src={screen.src} alt={screen.label} />
              </div>
            </div>
            <span className="ss-label">{screen.label}</span>
          </div>
        ))}
      </div>
      <div className="ss-hint">← Drag to explore →</div>
    </section>
  );
}
