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
  - need to integrate in Travis' JPL Horizon's query set to dynamically pull the data
  - need to dynamically create all graphics nased on Horizon's query
