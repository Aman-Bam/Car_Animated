# 🚗 Car Animation Project

A smooth and engaging car animation built with pure CSS and JavaScript, featuring a moving car with rotating wheels on an infinite scrolling track.

![Car Animation Demo](demo.gif)

## ✨ Features

- **Smooth Car Movement**: Realistic car driving animation with infinite scrolling track
- **Rotating Wheels**: Individual wheel rotation animations synchronized with car movement
- **Dynamic Environment**: Animated background with trees and sky
- **Sound Integration**: Optional sound effects with fallback user interaction
- **Responsive Design**: Optimized for different screen sizes
- **Performance Optimized**: Uses CSS transforms and `will-change` property for smooth animations

## 🎥 Demo

Check out the live demo: [Car Animation Demo](#) 

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/car-animation.git
   cd car-animation
   ```

2. **Add required assets**
   Make sure you have these image files in your project directory:
   - `background.jpg` - Sky background image
   - `trees.png` - Trees silhouette
   - `track.png` - Road/track texture
   - `car_body.png` - Main car body image
   - `car_wheel_left.png` - Left wheel image
   - `car_wheel_right.png` - Right wheel image
   - `sound.mp3` - Car engine sound (optional)

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

## 📁 Project Structure

```
car-animation/
├── index.html          # Main HTML file
├── style.css           # CSS animations and styling
├── script.js          # JavaScript for sound and interactions
├── assets/            # Image and audio files
│   ├── background.jpg
│   ├── trees.png
│   ├── track.png
│   ├── car_body.png
│   ├── car_wheel_left.png
│   ├── car_wheel_right.png
│   └── sound.mp3
└── README.md
```

## 🎨 Customization

### Animation Speeds
You can modify animation speeds in `style.css`:

```css
/* Wheel rotation speed */
.wheel1 img, .wheel2 img {
    animation: wheelRotation linear 0.13s infinite;
}

/* Track movement speed */
.track {
    animation: carmove linear 2s infinite;
}

/* Car shake effect */
.car {
    animation: shake linear 0.7s infinite;
}
```

### Visual Elements
- **Background**: Replace `background.jpg` with your preferred sky image
- **Car Design**: Customize `car_body.png` and wheel images
- **Environment**: Modify `trees.png` for different scenery

### Sound Effects
- Replace `sound.mp3` with your preferred audio file
- Adjust volume and loop settings in `script.js`

## 🔧 Technical Details

### CSS Animations Used
- `wheelRotation`: 360° rotation for realistic wheel spinning
- `carmove`: Horizontal translation for infinite track scrolling
- `shake`: Vertical oscillation for car vibration effect
- `shakebody`: Body shake for immersive experience

### Performance Optimizations
- `will-change: transform` on animated elements
- Hardware acceleration with CSS transforms
- Efficient background image handling with `background-attachment: fixed`

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## 🎵 Audio Integration

The project includes smart audio handling:
- Attempts to auto-play background sound
- Falls back to user-activated play button if auto-play is blocked
- Graceful degradation if audio file is missing

```javascript
// Auto-play with fallback
audio.play().catch(() => {
    // Show play button if auto-play fails
    var playButton = document.createElement('button');
    // ... button creation logic
});
```

## 🌟 Advanced Features

### Adding More Cars
To add multiple cars, duplicate the car HTML structure and modify CSS classes:

```html
<div class="car car2">
    <!-- Car elements -->
</div>
```

### Environmental Effects
- Add rain animation with CSS keyframes
- Include day/night cycle transitions
- Implement weather-based visual changes

## 🐛 Troubleshooting

### Common Issues

**Animation not smooth?**
- Check if hardware acceleration is enabled in your browser
- Reduce animation complexity on lower-end devices

**Images not loading?**
- Verify all image files are in the correct directory
- Check file names match exactly (case-sensitive)

**No sound?**
- Ensure `sound.mp3` is present and properly formatted
- Check browser's autoplay policies

**Performance issues?**
- Reduce animation frequency
- Optimize image file sizes
- Use CSS `transform3d()` for better performance

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions
- Mobile responsiveness improvements
- Additional vehicle types
- Environmental weather effects
- Sound effect variations
- Performance optimizations

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspiration from classic racing games
- CSS animation techniques from the web development community
- Thanks to all contributors and testers

## 📞 Support

Having issues? Here's how to get help:
- 🐛 [Report bugs](https://github.com/Aman-Bam/car-animation/issues)
- 💡 [Request features](https://github.com/Aman-Bam/car-animation/issues)
- 📧 Email: amanbam6040@gmail.com

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ for the web development community
