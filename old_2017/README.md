live at [drassenov.com](http://drassenov.com)

### live background data for website

- near-mars asteroid orbits
- Mars moves between 1.38 AU and 1.66 AU (avg 1.52 AU) - [source](http://www.universetoday.com/15462/how-far-are-the-planets-from-the-sun/)
- [Asterank API](http://www.asterank.com/api)
  - [example query](http://www.asterank.com/api/asterank?query={%22e%22:{%22$lt%22:0.1},%22i%22:{%22$lt%22:4},%22a%22:{%22$lt%22:1.6,%22$gt%22:1.4}}&limit=10)
  - based on [this CGI version](http://ssd.jpl.nasa.gov/sbdb.cgi)
- [Inner Solar System Orbit](http://ssd.jpl.nasa.gov/?ss_inner)

### gists

- [LSSS live JPL data (partial)](https://gist.github.com/endeavor85/336b5c24f72100b3ee88)
  - [svg arc animation (partial)](https://gist.github.com/endeavor85/c8528d8bb5ef10dca8b2)
    - needs [arc attrTween](http://bl.ocks.org/mbostock/5100636)
    - partial version working [here](https://gist.github.com/endeavor85/edca8a3f52c14b5b6b55)

- [Randy testing orbit plotting] (https://github.com/rosalesr/lsss_d3_testing)
  - based on D3 example here: http://palerdot.github.io/moon-phase-visualizer/d3-moon-viz.html
  - another good example: http://d3shooter.herokuapp.com/
  - and another...: http://nbremer.github.io/exoplanets/
  - and the astertrak website itself has a visualization!? that is neato...but not general purpose enough for Mars-centric mission architecture 
  
  Todo: 
  - need to integrate popup info and mouse-over actions
  - need to integrate mouse controls for pan and zoom
  
### demo

- [Halo Hover](https://github.com/DrAssenovComics/DrAssenovComics.github.io/blob/master/demo/halo-hover.html) ([demo](http://www.drassenov.com/demo/halo-hover.html))
