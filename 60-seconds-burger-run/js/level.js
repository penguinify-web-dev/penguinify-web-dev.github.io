var sprt;
var plats;
var logs;
var spikes;
var bumpers;
var pars;
var sfx;
var levl = 1;
var p;
var gamePad;
var spaceKey;
var cursors;
var wasd;
var tuts;
var tim = 0;
var clck;
var maps = [null, {
    plats: [{
        x: 440,
        y: 200,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 480,
        bottom: 240
    }, {
        x: -40,
        y: -160,
        w: 40,
        h: 360,
        semi: null,
        del: null,
        txt: null,
        right: 0,
        bottom: 200
    }, {
        x: 0,
        y: 200,
        w: 440,
        h: 160,
        semi: null,
        del: null,
        txt: null,
        right: 440,
        bottom: 360
    }, {
        x: 1080,
        y: -200,
        w: 40,
        h: 640,
        semi: null,
        del: null,
        txt: null,
        right: 1120,
        bottom: 440
    }, {
        x: 480,
        y: 200,
        w: 360,
        h: 160,
        semi: null,
        del: null,
        txt: null,
        right: 840,
        bottom: 360
    }, {
        x: 680,
        y: 120,
        w: 160,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 840,
        bottom: 200
    }, {
        x: 840,
        y: 280,
        w: 160,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 1000,
        bottom: 360
    }, {
        x: 720,
        y: 480,
        w: 40,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 760,
        bottom: 520
    }, {
        x: 680,
        y: 520,
        w: 40,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 720,
        bottom: 560
    }, {
        x: 760,
        y: 440,
        w: 320,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 1080,
        bottom: 480
    }, {
        x: 120,
        y: 560,
        w: 560,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 680,
        bottom: 600
    }, {
        x: 360,
        y: 360,
        w: 80,
        h: 120,
        semi: null,
        del: null,
        txt: null,
        right: 440,
        bottom: 480
    }, {
        x: 80,
        y: 360,
        w: 40,
        h: 200,
        semi: null,
        del: null,
        txt: null,
        right: 120,
        bottom: 560
    }, {
        x: 480,
        y: 360,
        w: 80,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 560,
        bottom: 440
    }],
    sprt: {
        x: 240,
        y: 200,
        xx: 1
    },
    spikes: [],
    xit: {
        x: 240,
        y: 560
    },
    yEnd: 800,
    grfx: {
        txt: 'lev1',
        x: -80,
        y: -200
    },
    tuts: [{
        nr: 1,
        x: 0,
        y: 40,
        right: 360,
        bottom: 200
    }, {
        nr: 2,
        x: 500,
        y: 40,
        right: 660,
        bottom: 200
    }, {
        nr: 4,
        x: 400,
        y: 400,
        right: 680,
        bottom: 560
    }]
}, {
    plats: [{
        x: 240,
        y: 80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 280,
        bottom: 120
    }, {
        x: 600,
        y: 280,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 320
    }, {
        x: 600,
        y: 360,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 400
    }, {
        x: 600,
        y: 440,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 480
    }, {
        x: 280,
        y: 80,
        w: 40,
        h: 40,
        semi: true,
        del: true,
        txt: null,
        hsl: [1000, 1000, 900],
        right: 320,
        bottom: 120
    }, {
        x: 200,
        y: 80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 240,
        bottom: 120
    }, {
        x: 160,
        y: 80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 200,
        bottom: 120
    }, {
        x: 120,
        y: 80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 160,
        bottom: 120
    }, {
        x: 80,
        y: 80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 120,
        bottom: 120
    }, {
        x: 0,
        y: 200,
        w: 360,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 360,
        bottom: 280
    }, {
        x: 640,
        y: 160,
        w: 200,
        h: 320,
        semi: null,
        del: null,
        txt: null,
        right: 840,
        bottom: 480
    }, {
        x: -40,
        y: -160,
        w: 40,
        h: 360,
        semi: null,
        del: null,
        txt: null,
        right: 0,
        bottom: 200
    }, {
        x: 360,
        y: 480,
        w: 40,
        h: 160,
        semi: null,
        del: null,
        txt: null,
        right: 400,
        bottom: 640
    }, {
        x: 720,
        y: 480,
        w: 40,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 760,
        bottom: 560
    }, {
        x: 560,
        y: 560,
        w: 240,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 800,
        bottom: 640
    }, {
        x: 400,
        y: 640,
        w: 160,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 560,
        bottom: 680
    }, {
        x: 800,
        y: -200,
        w: 40,
        h: 360,
        semi: null,
        del: null,
        txt: null,
        right: 840,
        bottom: 160
    }, {
        x: 320,
        y: 120,
        w: 280,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 600,
        bottom: 200
    }, {
        x: 360,
        y: 200,
        w: 240,
        h: 280,
        semi: null,
        del: null,
        txt: null,
        right: 600,
        bottom: 480
    }],
    sprt: {
        x: 180,
        y: 200,
        xx: 1
    },
    spikes: [],
    xit: {
        x: 480,
        y: 640
    },
    yEnd: 720,
    grfx: {
        txt: 'lev2',
        x: -80,
        y: -240
    },
    tuts: [{
        nr: 3,
        x: 359.9,
        y: -40,
        right: 800.3,
        bottom: 161
    }]
}, {
    plats: [{
        x: 120,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1111, 1000, 1000],
        right: 160,
        bottom: 40
    }, {
        x: 600,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 40
    }, {
        x: 280,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 320,
        bottom: 40
    }, {
        x: 320,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1072, 750, 1000],
        right: 360,
        bottom: 40
    }, {
        x: -40,
        y: 80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 0,
        bottom: 120
    }, {
        x: 360,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 400,
        bottom: 40
    }, {
        x: 440,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 480,
        bottom: 40
    }, {
        x: 520,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 560,
        bottom: 40
    }, {
        x: 680,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 720,
        bottom: 40
    }, {
        x: 400,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1072, 750, 1000],
        right: 440,
        bottom: 40
    }, {
        x: 480,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1072, 750, 1000],
        right: 520,
        bottom: 40
    }, {
        x: 560,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1072, 750, 1000],
        right: 600,
        bottom: 40
    }, {
        x: 640,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1072, 750, 1000],
        right: 680,
        bottom: 40
    }, {
        x: -80,
        y: 200,
        w: 160,
        h: 120,
        semi: null,
        del: null,
        txt: null,
        right: 80,
        bottom: 320
    }, {
        x: 80,
        y: 240,
        w: 640,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 720,
        bottom: 320
    }, {
        x: -40,
        y: 320,
        w: 80,
        h: 240,
        semi: null,
        del: null,
        txt: null,
        right: 40,
        bottom: 560
    }, {
        x: 600,
        y: 320,
        w: 80,
        h: 240,
        semi: null,
        del: null,
        txt: null,
        right: 680,
        bottom: 560
    }],
    sprt: {
        x: 160,
        y: 240,
        xx: 1
    },
    spikes: [{
        x: 260,
        y: 240
    }, {
        x: 300,
        y: 240
    }, {
        x: 340,
        y: 240
    }, {
        x: 380,
        y: 240
    }],
    xit: {
        x: 560,
        y: 240
    },
    yEnd: 600,
    grfx: {
        txt: 'lev3',
        x: -80,
        y: 200
    },
    lbg: {
        txt: 'lbg3',
        x: -120,
        y: 200
    },
    tuts: [{
        nr: 5,
        x: 280,
        y: -200,
        right: 719.9,
        bottom: 1
    }]
}, {
    plats: [{
        x: -200,
        y: 240,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: -160,
        bottom: 280
    }, {
        x: 360,
        y: 280,
        w: 80,
        h: 40,
        semi: null,
        del: true,
        txt: 'bricks101',
        right: 440,
        bottom: 320
    }, {
        x: -520,
        y: 240,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: -480,
        bottom: 280
    }, {
        x: -600,
        y: 240,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: -560,
        bottom: 280
    }, {
        x: -680,
        y: 280,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: -640,
        bottom: 320
    }, {
        x: -760,
        y: 360,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: -720,
        bottom: 400
    }, {
        x: -840,
        y: 480,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: -800,
        bottom: 520
    }, {
        x: -40,
        y: 240,
        w: 280,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 240,
        bottom: 280
    }, {
        x: -360,
        y: 240,
        w: 80,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: -280,
        bottom: 320
    }, {
        x: 0,
        y: 80,
        w: 80,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 80,
        bottom: 160
    }, {
        x: 120,
        y: 80,
        w: 80,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 200,
        bottom: 160
    }, {
        x: -1000,
        y: 640,
        w: 80,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: -920,
        bottom: 720
    }],
    sprt: {
        x: 160,
        y: 240,
        xx: 1
    },
    spikes: [],
    xit: {
        x: -960,
        y: 640
    },
    yEnd: 760,
    grfx: {
        txt: 'lev4',
        x: -1000,
        y: 40
    },
    lbg: {
        txt: 'lbg4',
        x: 360,
        y: 220
    },
    tuts: []
}, {
    plats: [{
        x: 280,
        y: 400,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 320,
        bottom: 440
    }, {
        x: 280,
        y: 640,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 320,
        bottom: 680
    }, {
        x: 240,
        y: 520,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 280,
        bottom: 560
    }, {
        x: 280,
        y: 360,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 320,
        bottom: 400
    }, {
        x: 600,
        y: 40,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 80
    }, {
        x: 600,
        y: 80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 120
    }, {
        x: 600,
        y: 120,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 160
    }, {
        x: 600,
        y: 160,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 200
    }, {
        x: 600,
        y: 200,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 240
    }, {
        x: 160,
        y: 880,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 200,
        bottom: 920
    }, {
        x: 560,
        y: 760,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 600,
        bottom: 800
    }, {
        x: 600,
        y: 760,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 640,
        bottom: 800
    }, {
        x: 640,
        y: 760,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 680,
        bottom: 800
    }, {
        x: 680,
        y: 760,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 720,
        bottom: 800
    }, {
        x: 720,
        y: 760,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 760,
        bottom: 800
    }, {
        x: 560,
        y: 680,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 600,
        bottom: 720
    }, {
        x: 680,
        y: 600,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 720,
        bottom: 640
    }, {
        x: 560,
        y: 520,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 600,
        bottom: 560
    }, {
        x: 680,
        y: 440,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 720,
        bottom: 480
    }, {
        x: 720,
        y: 360,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 760,
        bottom: 400
    }, {
        x: 640,
        y: 280,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 680,
        bottom: 320
    }, {
        x: 680,
        y: 160,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 720,
        bottom: 200
    }, {
        x: 640,
        y: 40,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 680,
        bottom: 80
    }, {
        x: 40,
        y: -80,
        w: 40,
        h: 320,
        semi: null,
        del: null,
        txt: null,
        right: 80,
        bottom: 240
    }, {
        x: 0,
        y: 240,
        w: 240,
        h: 440,
        semi: null,
        del: null,
        txt: null,
        right: 240,
        bottom: 680
    }, {
        x: 360,
        y: 0,
        w: 240,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 600,
        bottom: 80
    }, {
        x: 360,
        y: 80,
        w: 80,
        h: 160,
        semi: null,
        del: null,
        txt: null,
        right: 440,
        bottom: 240
    }, {
        x: 320,
        y: 240,
        w: 320,
        h: 80,
        semi: null,
        del: null,
        txt: null,
        right: 640,
        bottom: 320
    }, {
        x: 320,
        y: 320,
        w: 240,
        h: 360,
        semi: null,
        del: null,
        txt: null,
        right: 560,
        bottom: 680
    }, {
        x: 720,
        y: -160,
        w: 80,
        h: 400,
        semi: null,
        del: null,
        txt: null,
        right: 800,
        bottom: 240
    }, {
        x: 760,
        y: 160,
        w: 40,
        h: 640,
        semi: null,
        del: null,
        txt: null,
        right: 800,
        bottom: 800
    }, {
        x: 200,
        y: 760,
        w: 360,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 560,
        bottom: 800
    }, {
        x: 120,
        y: 680,
        w: 40,
        h: 240,
        semi: null,
        del: null,
        txt: null,
        right: 160,
        bottom: 920
    }],
    sprt: {
        x: 160,
        y: 240,
        xx: 1
    },
    spikes: [{
        x: 240,
        y: 340,
        rot: 90
    }, {
        x: 320,
        y: 460,
        rot: -90
    }, {
        x: 240,
        y: 580,
        rot: 90
    }],
    xit: {
        x: 520,
        y: 240
    },
    yEnd: 920,
    grfx: {
        txt: 'lev5',
        x: 0,
        y: -160
    },
    tuts: []
}, {
    plats: [{
        x: 160,
        y: -80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 200,
        bottom: -40
    }, {
        x: 240,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1000, 965, 1155],
        right: 280,
        bottom: 40
    }, {
        x: 80,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1000, 200, 1000],
        right: 120,
        bottom: 40
    }, {
        x: 320,
        y: 80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [897, 1000, 1000],
        right: 360,
        bottom: 120
    }, {
        x: 400,
        y: 160,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1214, 1000, 1000],
        right: 440,
        bottom: 200
    }, {
        x: 320,
        y: 280,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 360,
        bottom: 320
    }, {
        x: 480,
        y: 240,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1000, 600, 1000],
        right: 520,
        bottom: 280
    }, {
        x: 240,
        y: 280,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 280,
        bottom: 320
    }, {
        x: 120,
        y: 400,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 160,
        bottom: 440
    }, {
        x: 200,
        y: 480,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [875, 930, 1130],
        right: 240,
        bottom: 520
    }, {
        x: 280,
        y: 560,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1000, 700, 1095],
        right: 320,
        bottom: 600
    }, {
        x: 240,
        y: 720,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 280,
        bottom: 760
    }, {
        x: 280,
        y: 280,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        right: 320,
        bottom: 320
    }, {
        x: 80,
        y: 480,
        w: 80,
        h: 240,
        semi: null,
        del: null,
        txt: null,
        right: 160,
        bottom: 720
    }, {
        x: 200,
        y: 320,
        w: 200,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 400,
        bottom: 360
    }, {
        x: 240,
        y: 360,
        w: 120,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 360,
        bottom: 400
    }, {
        x: 160,
        y: 560,
        w: 80,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 240,
        bottom: 600
    }, {
        x: 160,
        y: 600,
        w: 40,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 200,
        bottom: 640
    }, {
        x: 120,
        y: 720,
        w: 120,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 240,
        bottom: 760
    }, {
        x: 160,
        y: 760,
        w: 40,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 200,
        bottom: 800
    }],
    sprt: {
        x: 180,
        y: -280,
        xx: 1
    },
    spikes: [{
        x: 100,
        y: 0
    }, {
        x: 500,
        y: 240
    }, {
        x: 380,
        y: 320
    }, {
        x: 300,
        y: 320
    }, {
        x: 220,
        y: 320
    }, {
        x: 340,
        y: 320
    }, {
        x: 260,
        y: 320
    }, {
        x: 260,
        y: 120
    }, {
        x: 140,
        y: 200,
        flip: true
    }, {
        x: 140,
        y: 160
    }, {
        x: 80,
        y: 500,
        rot: -90
    }, {
        x: 140,
        y: 480
    }, {
        x: 100,
        y: 480
    }, {
        x: 220,
        y: 560
    }, {
        x: 120,
        y: 180,
        rot: -90
    }, {
        x: 160,
        y: 180,
        rot: 90
    }, {
        x: 240,
        y: 140,
        rot: -90
    }, {
        x: 280,
        y: 140,
        rot: 90
    }, {
        x: 160,
        y: 500,
        rot: 90
    }, {
        x: 240,
        y: 580,
        rot: 90
    }, {
        x: 260,
        y: 160,
        flip: true
    }],
    xit: {
        x: 200,
        y: 720
    },
    yEnd: 800,
    grfx: {
        txt: 'lev6',
        x: 80,
        y: 120
    },
    tuts: []
}, {
    plats: [{
        x: 120,
        y: -80,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: 'bricks103',
        right: 160,
        bottom: -40
    }, {
        x: -40,
        y: -160,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1000, 0, 1000],
        right: 0,
        bottom: -120
    }, {
        x: 240,
        y: 0,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: 'bricks104',
        right: 280,
        bottom: 40
    }, {
        x: 0,
        y: -160,
        w: 40,
        h: 40,
        semi: null,
        del: true,
        txt: null,
        hsl: [1000, 0, 1000],
        right: 40,
        bottom: -120
    }, {
        x: -160,
        y: 240,
        w: 120,
        h: 80,
        semi: null,
        del: true,
        txt: 'bricks102',
        right: -40,
        bottom: 320
    }, {
        x: -200,
        y: -40,
        w: 40,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: -160,
        bottom: 0
    }, {
        x: 360,
        y: -80,
        w: 320,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: 680,
        bottom: -40
    }, {
        x: -240,
        y: 120,
        w: 40,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: -200,
        bottom: 160
    }, {
        x: -280,
        y: 80,
        w: 120,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: -160,
        bottom: 120
    }, {
        x: -240,
        y: -80,
        w: 120,
        h: 40,
        semi: null,
        del: null,
        txt: null,
        right: -120,
        bottom: -40
    }],
    sprt: {
        x: 0,
        y: -160,
        xx: 1
    },
    spikes: [{
        x: -260,
        y: 80
    }],
    xit: {
        x: 80,
        y: -690
    },
    bb: {
        x: 520,
        y: -80
    },
    yEnd: 320,
    grfx: {
        txt: 'lev7',
        x: -280,
        y: -80
    },
    lbg: {
        txt: 'lbg7',
        x: -240,
        y: -140
    },
    tuts: []
}];
var LevelState = {
    preload: function() {
        settings(this);
        game.stage.backgroundColor = "#000000";
    },
    create: function() {
        cursors = game.input.keyboard.createCursorKeys();
        wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D),
        };
        sfx = new Object;
        sfx.fxBus = this.add.audio('fxBus');
        sfx.fxJump = this.add.audio('fxJump', 1.5);
        sfx.fxDD = this.add.audio('fxDD', 0.2);
        sfx.fxLand = this.add.audio('fxLand');
        sfx.fxsplatterBrick = this.add.audio('fxsplatterBrick', 0.3);
        sfx.fxHup = this.add.audio('fxHup', 0.4);
        sfx.fxFall = this.add.audio('fxFall', 0.6);
        sfx.fxNom = this.add.audio('fxNom', 0.6, true);
        world = this;
        world.doneCT = null;
        world.q = null;
        pars = [];
        plats = [];
        logs = [];
        spikes = [];
        bumpers = [];
        game.input.onDown.add(controlDown, this);
        game.input.onUp.add(controlUp, this);
        sprt = this.game.add.sprite(this.game.world.centerX, 450, 'sprt');
        sprt.kolH = 30;
        sprt.kolW = 12;
        sprt.zf = 1;
        sprt.scale.setTo(sprt.zf, sprt.zf);
        sprt.animations.add('run', [5, 6, 7, 8, 9, 10], 16);
        sprt.animations.add('jump', [11], 1);
        sprt.animations.add('fall', [12], 1);
        sprt.animations.add('dd', [13], 1);
        sprt.animations.add('idle', [0, 1, 2, 3, 4], 6);
        sprt.anchor.setTo(0.5, 0.98);
        sprt.spd = 4;
        sprt.xx = 0;
        sprt.yy = -1;
        sprt.hSize = sprt.width / 2;
        sprt.ju = true;
        sprt.jh = -13;
        iniLevel();
        muPlay('muIngame', 0.4, false);
        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.hold = null;
        addBus();
        addGamepad();
        sprt.play('jump');
        game.camera.focusOnXY(sprt.x, sprt.y - 10);
        addClock();
    },
    update: function() {
        clockCode();
        if (sprt.y > world.yEnd + 800) {
            world.doneCT = 9999;
        }
        bgCode();
        if (bbCode()) {
            quakeCode();
            parCode();
            return;
        }
        if (busCode()) {
            quakeCode();
            parCode();
            return;
        }
        tutCode();
        if (sprt.visible) {
            if (!sprt.dd || 1 == 1) {
                xitCode();
                controls();
                preSpikeCode();
                gravCode();
                leftRightCode();
                spikeCode();
                saniCode();
                if (sprt.y < world.yEnd + 200) {
                    game.camera.focusOnXY(sprt.x, sprt.y - 10);
                }
            }
        }
        quakeCode();
        parCode();
    },
    render: function() {
        clck.y = game.camera.y + game.camera.height - 40;
        if (rotDevice) {
            rotDevice.x = game.camera.x;
            rotDevice.y = game.camera.y;
            game.world.bringToTop(rotDevice);
        }
        if (game.paused || rotDevice) {
            return;
        }
        if (world.doneCT) {
            if (world.doneCT > 120) {
                world.doneCT = null;
                if (!sprt.visible) {
                    if (levl > game.ldat) {
                        game.ldat = levl;
                        if (game.storageAvailable) {
                            localStorage.setItem('ldat', game.ldat);
                        }
                    }
                }
                newState();
            }
        }
    }
};
function bbCode() {
    if (!world.bb) {
        return;
    }
    if (world.bb.nom) {
        zoomBB();
        sprt.visible = false;
        goCode();
        return true;
    }
    if (sprtHitTest(world.bb)) {
        p.visible = false;
        hideGamePad();
        clck.visible = false;
        sprt.noControl = true;
        sprt.xx = 1;
        sprt.spd = (world.bb.x - sprt.x) / 24;
        if (sprt.spd > 3) {
            sprt.spd = 3;
        }
        sprt.spd = Math.ceil(sprt.spd * 2) * 0.5;
        if (sprt.x > world.bb.x - 1) {
            fxPlay(sfx.fxNom);
            if (mu) {
                mu.stop();
                mu.destroy();
                mu = null;
            }
            world.bb.nom = true;
            world.bb.yyb = 0;
            world.bb.ct1 = 0;
            world.bb.ct2 = 0;
        }
    }
}
function goCode() {
    world.bb.ct1++;
    if (world.bb.ct1 > 6) {
        var rnd = Math.random() * 0.3 - 0.15;
        world.bb.scale.x = 1 + rnd;
        world.bb.scale.y = 1 - rnd;
        world.bb.ct1 = 0;
        world.bb.ct2++;
        if (world.bb.ct1 == 0 && world.bb.ct2 == 15) {
            var wellDone = world.game.add.sprite(world.bb.x, world.bb.y - 130, 'wellDone');
            wellDone.anchor.setTo(0.5, 1);
        }
        if (world.bb.ct1 == 0 && world.bb.ct2 == 30) {
            var c2c = world.game.add.sprite(world.bb.x + 120, world.bb.y - 60, 'c2c');
            c2c.animations.add('idle', null, 1);
            c2c.play('idle', null, true);
            c2c.anchor.setTo(0, 0.5);
            sprt.gameDone = true;
        }
    }
}
function zoomBB() {
    sprt.x += (world.bb.x - sprt.x) / 12;
    var ybb = (world.bb.y - screenHeight / 2 + 20 - sprt.y) / 12;
    if (ybb < world.bb.yyb) {
        ybb = world.bb.yyb;
    }
    sprt.y += ybb;
    game.camera.focusOnXY(sprt.x, sprt.y - 10);
    world.bb.yyb -= 0.05;
}
function tutCode() {
    for (var i = 0; i < tuts.length; i++) {
        var tu = tuts[i];
        if (sprtHitTest(tu)) {
            if (!tu.mc) {
                tu.mc = addTut(tu);
            }
            tu.mc.yy = (4 - tu.mc.cameraOffset.y) / 12;
            tu.mc.cameraOffset.y = Math.ceil(tu.mc.cameraOffset.y + tu.mc.yy);
        } else if (tu.mc && tu.mc.cameraOffset.y > -200) {
            tu.mc.yy -= 0.25;
            tu.mc.cameraOffset.y += tu.mc.yy;
        }
    }
}
function addTut(tu) {
    var t = 'tut1M';
    if (game.device.desktop) {
        t = 'tut1D';
    }
    var tutMC = world.game.add.sprite(game.camera.width / 2, 0, 'tuts');
    tutMC.frame = tu.nr - 1;
    tutMC.anchor.setTo(0.5, 0);
    tutMC.nr = 1;
    tutMC.fixedToCamera = true;
    tutMC.cameraOffset.y = -200;
    var angel;
    angel = tutMC.addChild(game.make.sprite(77, 36, 'angel'));
    angel.animations.add('idle', null, 12);
    angel.angle = 90;
    angel.play('idle', null, true);
    angel.anchor.setTo(0.5, 1);
    angel.scale.x = -1;
    angel = tutMC.addChild(game.make.sprite(-77, 36, 'angel'));
    angel.animations.add('idle', null, 12);
    angel.angle = -90;
    angel.play('idle', null, true);
    angel.anchor.setTo(0.5, 1);
    return tutMC;
}
function iniLevel() {
    var ldat = maps[levl];
    world.scroll = ldat.scroll;
    var spikeArray = ldat.spikes;
    var si = 0;
    for (var i = 0; i < spikeArray.length; i++) {
        var ob = spikeArray[i];
        var s = world.game.add.sprite(ob.x, ob.y, 'spikes');
        s.anchor.setTo(0.5, 1);
        s.kolSize = 20;
        s.kolSizeY = 12;
        s.l = s.x - s.kolSize;
        s.r = s.x + s.kolSize;
        s.t = s.y - s.kolSizeY;
        s.b = s.y;
        if (ob.flip) {
            s.scale.y = -1;
            s.l = s.x - s.kolSize;
            s.r = s.x + s.kolSize;
            s.t = s.y;
            s.b = s.y + s.kolSizeY;
            s.dwn = true;
        }
        if (ob.rot == 90) {
            s.angle = ob.rot;
            s.l = s.x;
            s.r = s.x + s.kolSizeY;
            s.t = s.y - s.kolSize;
            s.b = s.y + s.kolSize;
            s.dwn = true;
        }
        if (ob.rot == -90) {
            s.angle = ob.rot;
            s.l = s.x - s.kolSizeY;
            s.r = s.x;
            s.t = s.y - s.kolSize;
            s.b = s.y + s.kolSize;
            s.dwn = true;
        }
        spikes.push(s);
    }
    world.bb = null;
    if (ldat.bb) {
        world.bb = world.game.add.sprite(ldat.bb.x, ldat.bb.y, 'burgerBar');
        world.bb.anchor.setTo(0.5, 1);
        world.bb.sendToBack();
        var kolSize = 160;
        var kolSizeY = 20;
        world.bb.l = world.bb.x - kolSize;
        world.bb.r = world.bb.x + kolSize;
        world.bb.t = world.bb.y - kolSizeY;
        world.bb.b = world.bb.y;
    }
    var platArray = ldat.plats;
    for (var i = 0; i < platArray.length; i++) {
        var ob = platArray[i];
        var plat;
        if (ob.del) {
            var txtNam = 'bricks';
            if (ob.txt) {
                txtNam = ob.txt;
            }
            var bmd = txtNam;
            var bmd1 = 'splatterBrick1';
            var bmd2 = 'splatterBrick2';
            if (ob.hsl) {
                var h = ob.hsl[0] / 1000 - 1;
                var s = ob.hsl[1] / 1000 - 1;
                var l = ob.hsl[2] / 1000 - 1;
                bmd = game.make.bitmapData(40, 40);
                bmd.copy('bricks');
                bmd.update();
                bmd.shiftHSL(h, s, l);
                bmd1 = game.make.bitmapData(20, 10);
                bmd1.copy('splatterBrick1');
                bmd1.update();
                bmd1.shiftHSL(h, s, l);
                bmd2 = game.make.bitmapData(20, 10);
                bmd2.copy('splatterBrick2');
                bmd2.update();
                bmd2.shiftHSL(h, s, l);
            }
            plat = world.game.add.sprite(ob.x, ob.y, bmd);
            plat.splatterBricks = [bmd1, bmd2];
            plat.del = ob.del;
            plat.sendToBack();
        } else {
            plat = world.game.add.sprite(ob.x, ob.y, 'plat');
            plat.visible = false;
        }
        plat.width = ob.w;
        plat.height = ob.h;
        plat.l = ob.x;
        plat.t = ob.y;
        plat.r = ob.right;
        plat.b = ob.bottom;
        if (ob.semi) {
            plat.semi = 1;
        }
        plats.push(plat);
    }
    var logArray = ldat.bumpers;
    for (var i = 0; logArray && i < logArray.length; i++) {
        var ob = logArray[i];
        var b = world.game.add.sprite(ob.x, ob.y, 'bumper');
        b.anchor.setTo(0.5, 1);
        b.kolSize = 50;
        b.l = ob.x - b.kolSize;
        b.r = ob.x + b.kolSize;
        b.b = ob.y;
        b.t = ob.y - 80;
        b.animations.add('bump', [1, 2, 3, 4, 5, 6, 7, 0], 8);
        bumpers.push(b);
    }
    var logArray = ldat.logs;
    var si = 0;
    for (var i = 0; i < logArray && logArray.length; i++) {
        var ob = logArray[i];
        var log = world.game.add.sprite(ob.x, ob.y, 'log');
        log.anchor.setTo(0.5, 0.5);
        log.kolSize = 26;
        log.animations.add('idle', null, 8);
        log.play('idle', null, true);
        log.si = si;
        si += 2;
        log.yo = log.y;
        logs.push(log);
    }
    world.xit = world.game.add.sprite(ldat.xit.x, ldat.xit.y, 'busStop');
    world.xit.kolSize = 20;
    world.xit.l = world.xit.x - world.xit.kolSize;
    world.xit.r = world.xit.x + world.xit.kolSize;
    world.xit.t = world.xit.y - world.xit.kolSize;
    world.xit.b = world.xit.y + world.xit.kolSize;
    world.xit.anchor.setTo(0.5, 1);
    world.xit.sendToBack();
    sprt.position.setTo(ldat.sprt.x, ldat.sprt.y);
    sprt.scale.x *= ldat.sprt.xx;
    world.game.add.sprite(ldat.grfx.x, ldat.grfx.y, ldat.grfx.txt);
    if (ldat.lbg) {
        var lbgrx = world.game.add.sprite(ldat.lbg.x, ldat.lbg.y, ldat.lbg.txt);
        lbgrx.sendToBack();
    }
    iniPause();
    game.world.setBounds(-99999, -99999, 9999999, 9999999);
    world.limB = 9999;
    world.yEnd = ldat.yEnd;
    iniBG();
    tuts = [];
    for (var i = 0; i < ldat.tuts.length; i++) {
        var ob = ldat.tuts[i];
        var b = {};
        b.nr = ob.nr;
        b.l = ob.x;
        b.r = ob.right;
        b.t = ob.y;
        b.b = ob.bottom;
        tuts.push(b);
    }
}
function addClock() {
    clck = game.add.group();
    clck.fixedToCamera = true;
    clck.cameraOffset.setTo(game.camera.width / 2, game.camera.height - 40);
    clck.clock1 = clck.create(0, 0, 'clock1');
    clck.clock1.anchor.setTo(0.5);
    clck.clockBG = clck.create(0, 0, 'clockBG');
    clck.clockBG.anchor.setTo(0.5);
}
function clockCode() {
    if (!clck.visible) {
        return;
    }
    tim += 1 / 60 * 6;
    var tAngle = tim;
    clck.clock1.angle = tAngle;
    if (tAngle > 180) {
        clck.clockBG.frame = 1;
        if (tAngle > 360) {
            clck.clock1.angle = 0;
            levl = -9;
            world.doneCT = 999;
        }
    }
}
function addGamepad() {
    if (game.device.desktop) {
        return;
    }
    gamePad = game.add.group();
    gamePad.fixedToCamera = true;
    gamePad.btn = [];
    gamePad.aL = gamePad.create(0, 0, 'brArwLeft');
    gamePad.aL.inputEnabled = true;
    gamePad.aL.anchor.setTo(0, 1);
    gamePad.aR = gamePad.create(0, 0, 'brArwRight');
    gamePad.aR.inputEnabled = true;
    gamePad.aR.anchor.setTo(-1, 1);
    gamePad.aU = gamePad.create(screenWidth, screenHeight, 'brArwUp');
    gamePad.aU.anchor.setTo(1, 1);
    gamePad.aU.inputEnabled = true;
    gamePad.aL.x = 0;
    gamePad.aR.x = 0;
    resetGamePad();
}
function hideGamePad() {
    if (gamePad) {
        gamePad.visible = false;
    }
}
function resetGamePad() {
    if (gamePad) {
        gamePad.aL.y = screenHeight - 4;
        gamePad.aR.y = screenHeight - 4;
        gamePad.aU.y = screenHeight - 4;
    }
    if (clck) {
        clck.cameraOffset.setTo(game.camera.width / 2, game.camera.height - 40);
    }
    if (p && p.bg) {
        p.bg.height = game.camera.height + 10;
    }
    if (game.btnHome) {
        game.btnHome.y = game.camera.height / 2;
        game.btnMu.y = game.camera.height / 2;
        game.btnFX.y = game.camera.height / 2;
    }
}
function iniPause() {
    p = world.game.add.sprite(screenWidth, 0, 'btnSettings');
    p.anchor.setTo(1, 0);
    p.fixedToCamera = true;
    p.inputEnabled = true;
    p.events.onInputDown.add(pauseCode, world);
    p.pop = game.add.group();
    p.pop.visible = false;
    p.pop.fixedToCamera = true;
    p.btn = [];
    p.bg = p.pop.create(0, 0, 'black');
    p.bg.alpha = 0.66;
    p.bg.width = game.camera.width;
    p.bg.height = game.camera.height + 10;
    game.btnHome = addButtons('btnHome', 0);
    game.btnMu = addButtons('btnMu', -120);
    game.btnFX = addButtons('btnFX', 120);
    setMuFXBtns();
}
function addButtons(nam, xOff) {
    var b = p.pop.create(game.camera.width / 2 + xOff, game.camera.height / 2, nam);
    b.anchor.setTo(0.5, 0.5);
    b.inputEnabled = true;
    p.btn.push(b);
    return b;
}
function setMuFXBtns() {
    if (!game.btnMu) {
        return;
    }
    if (game.muteMu) {
        game.btnMu.frame = 0;
    } else {
        game.btnMu.frame = 1;
    }
    if (game.muteFX) {
        game.btnFX.frame = 0;
    } else {
        game.btnFX.frame = 1;
    }
}
function pauseCode() {
    muPause();
    clickSound();
    p.pop.visible = true;
    game.world.bringToTop(p.pop);
    game.world.bringToTop(p);
    p.frame = 1;
    game.paused = true;
}
function txtCode(txt) {
    for (var i = 0; i < txt.length; i++) {
        var ob = txt[i];
        var t = world.game.add.sprite(ob.x, ob.y, ob.t);
        t.anchor.setTo(0, 1);
        if (ob.w) {
            t.width = ob.w;
            t.height = ob.h;
        }
        if (ob.flip) {
            t.width = -t.width;
        }
        if (ob.rot) {
            t.angle = ob.rot;
        }
    }
}
function iniBG() {
    bmd = game.make.bitmapData(100, 500);
    bmd.copy('bg0');
    bmd.update();
    bmd.shiftHSL(Math.random() * 1 - 5);
    world.bg0 = game.add.sprite(0, 0, bmd);
    world.bg0.width = game.camera.width;
    world.bg0.height = game.camera.height;
    world.bg0.fixedToCamera = true;
    world.bg = game.add.tileSprite(0, 0, game.camera.width, game.camera.height, 'bg1');
    world.bg.fixedToCamera = true;
    world.bg.xx = Math.random() * 4 - 2;
    world.bg.yy = Math.random() * 4 - 2;
    world.bg.sendToBack();
    world.bg0.sendToBack();
}
function gravCode() {
    if (sprt.y > world.yEnd) {
        hideGamePad();
        removeSettingsButton();
        if (!sprt.dd) {
            fxPlay(sfx.fxFall);
            sprt.dd = true;
            sprt.rot = 0;
        }
        if (sprt.yy > 10) {
            sprt.yy = 10;
        }
        sprt.xx = 0;
        sprt.noControl = true;
        sprt.rot += 0.1 * sprt.scale.x;
        sprt.angle += Math.sin(sprt.rot) * 20;
    }
    sprt.yy += 0.6;
    sprt.position.y += sprt.yy;
    if (sprt.dd) {
        return;
    }
    var newYY = sprt.yy;
    var newY = sprt.y;
    var delPlat = [];
    for (var i = 0; i < plats.length; i++) {
        var p = plats[i];
        if (sprtHitTest(p)) {
            if (sprt.yy >= 0) {
                if (sprt.y - sprt.yy - 5 > p.top) {
                    continue;
                }
                if (p.top < newY) {
                    newY = p.top;
                }
                sprt.ju = false;
                newYY = 0;
                if (p.del && sprt.yy >= 11) {
                    delPlat.push(p);
                    continue;
                }
                if (sprt.yy > 3) {
                    world.q = sprt.yy * 1.5;
                    sfx.fxLand.volume = sprt.yy / 20;
                    fxPlay(sfx.fxLand);
                    if (sprt.yy > 8) {
                        sprt.land = true;
                    }
                }
            }
            if (sprt.yy < 0 && !p.semi) {
                sprt.y = p.bottom + sprt.kolH;
                newY = sprt.y;
                sprt.ju = false;
                newYY = 0;
            }
        }
    }
    sprt.y = newY;
    if (delPlat.length > 0) {
        sfx.fxLand.volume = 0;
        newYY = -8;
        sprt.ju = true;
        sprt.land = null;
        fxPlay(sfx.fxsplatterBrick);
        while (delPlat.length > 0) {
            var dp = delPlat.pop();
            addSplatterBrick(dp);
            plats.splice(plats.indexOf(dp), 1);
            dp.destroy();
        }
    }
    if (sprt.land) {
        var cloudAni = world.game.add.sprite(sprt.x, sprt.y, 'cloudAni');
        cloudAni.anchor.setTo(0.5, 1);
        cloudAni.animations.add('idle', null, 16);
        cloudAni.play('idle', null, false, true);
        game.world.setChildIndex(cloudAni, sprt.z);
        sprt.land = null;
    }
    sprt.yy = newYY;
    if (sprt.yy > 1) {
        sprt.ju = true;
    }
}
function removeSettingsButton() {
    p.visible = false;
}
function addSplatterBrick(ob) {
    for (var i = 0; i < 12; i++) {
        var xx = Math.random() * 10 - 5;
        var yy = Math.random() * -6 - 6;
        var rnd = Math.floor(Math.random() * 2);
        var log = world.game.add.sprite(ob.x + ob.width / 2 + xx, ob.y + ob.height / 2 + yy, ob.splatterBricks[rnd]);
        log.anchor.setTo(0.5, 0.5);
        log.xx = xx;
        log.yy = yy;
        log.rot = Math.random() * 20 - 10;
        pars.push(log);
    }
    game.world.bringToTop(clck);
}
function leftRightCode() {
    if (sprt.dd) {
        return;
    }
    sprt.x += sprt.xx * sprt.spd;
    var newXX = sprt.xx;
    for (var i = 0; i < plats.length; i++) {
        var p = plats[i];
        if (p.semi) {
            continue;
        }
        if (sprtHitTest(p)) {
            if (sprt.xx > 0) {
                newXX = 0;
                sprt.x = p.left - sprt.kolW;
            }
            if (sprt.xx < 0) {
                newXX = 0;
                sprt.x = p.right + sprt.kolW;
            }
        }
    }
    sprt.xx = newXX;
    if (sprt.xx != 0) {
        sprt.scale.x = sprt.zf * sprt.xx;
    }
}
function addParLog(ob, xx, yy) {
    var log = world.game.add.sprite(ob.x + xx, ob.y + yy, 'log');
    log.anchor.setTo(0.5, 0.5);
    log.animations.add('idle', null, 12);
    log.play('idle', null, true);
    log.scale.setTo(-0.5, 0.5);
    if (xx > 0) {
        log.scale.setTo(0.5, 0.5);
    }
    log.xx = xx;
    log.yy = yy;
    log.rot = 0;
    pars.push(log);
}
function preSpikeCode() {
    if (sprt.dd) {
        return;
    }
    sprt.position.y += sprt.yy + 0.6;
    sprt.x += sprt.xx * sprt.spd;
    for (var i = 0; i < spikes.length; i++) {
        var s = spikes[i];
        if (sprtHitTest(s)) {
            if (!s.dwn && sprt.yy < 0) {
                continue;
            }
            fxPlay(sfx.fxDD);
            hideGamePad();
            world.doneCT = 1;
            sprt.bringToTop();
            p.bringToTop();
            game.world.bringToTop(clck);
            sprt.rot = -sprt.xx * 2.5;
            sprt.xx = -sprt.xx * 2;
            sprt.yy = -13;
            sprt.dd = true;
            p.visible = false;
            return;
        }
    }
    sprt.position.y -= sprt.yy + 0.6;
    sprt.x -= sprt.xx * sprt.spd;
}
function spikeCode() {
    if (sprt.dd) {
        return;
    }
    for (var i = 0; i < spikes.length; i++) {
        var s = spikes[i];
        if (sprtHitTest(s)) {
            if (!s.dwn && sprt.yy < 0) {
                continue;
            }
            fxPlay(sfx.fxDD);
            hideGamePad();
            world.doneCT = 1;
            sprt.bringToTop();
            p.bringToTop();
            game.world.bringToTop(clck);
            sprt.rot = -sprt.xx * 2.5;
            sprt.xx = -sprt.xx * 2;
            sprt.yy = -13;
            sprt.dd = true;
            p.visible = false;
            return;
        }
    }
}
function xitCode() {
    if (sprt.dd || world.doneCT) {
        return;
    }
    if (!sprt.ju && sprtHitTest(world.xit)) {
        if (sprt.x < world.xit.x - 30 || sprt.x > world.xit.x + 10) {
            return;
        }
        levl++;
        hideGamePad();
        callBus();
        sprt.noControl = true;
        sprt.xx = 0;
        world.doneCT = 1;
        p.visible = false;
    }
}
function sprtHitTest(ob) {
    sprt.l = sprt.position.x - sprt.kolW;
    sprt.r = sprt.position.x + sprt.kolW;
    sprt.b = sprt.position.y;
    sprt.t = sprt.position.y - sprt.kolH;
    if (sprt.l < ob.r && sprt.r > ob.l && sprt.t < ob.b && sprt.b > ob.t) {
        return true;
    }
    return false;
}
function controlDown(pointer) {
    if (sprt.gameDone) {
        sprt.gameDone = null;
        game.sound.stopAll();
        if (parent && parent.cmgGameEvent) {
            parent.cmgGameEvent('start');
        }
        levl = 0;
        newState();
        return;
    }
    sprt.keyDown = true;
    if (game.paused && !rotDevice) {
        pauseMenClick(pointer);
    }
}
function pauseMenClick(pointer) {
    if (p.getBounds().contains(pointer.x, pointer.y)) {
        clickSound();
        p.frame = 0;
        game.paused = false;
        muResume();
        p.pop.visible = false;
        sprt.keyDown = null;
        return;
    }
    muteButtons(pointer);
    for (var i = 0; i < p.btn.length; i++) {
        var b = p.btn[i];
        if (b.getBounds().contains(pointer.x, pointer.y)) {
            if (b.key == 'btnHome') {
                clickSound();
                levl = 0;
                newState();
            }
        }
    }
}
function muteButtons(pointer) {
    if (rotDevice) {
        return;
    }
    if (game.btnMu.getBounds().contains(pointer.x, pointer.y)) {
        clickSound();
        if (game.muteMu) {
            game.muteMu = false;
        } else {
            game.muteMu = true;
        }
        mu.mute = game.muteMu;
        setMuFXBtns();
        return;
    }
    if (game.btnFX.getBounds().contains(pointer.x, pointer.y)) {
        clickSound();
        if (game.muteFX) {
            game.muteFX = false;
        } else {
            game.muteFX = true;
        }
        setMuFXBtns();
        return;
    }
}
function controlUp(pointer) {
    sprt.keyDown = null;
}
function pointers2Buttons(pointer) {
    if (!pointer.isDown) {
        return;
    }
    if (gamePad.aL.getBounds().contains(pointer.x, pointer.y)) {
        gamePad.aL.dwn = true;
    }
    if (gamePad.aR.getBounds().contains(pointer.x, pointer.y)) {
        gamePad.aR.dwn = true;
    }
    if (gamePad.aU.getBounds().contains(pointer.x, pointer.y)) {
        spaceKey.alt = true;
    }
}
function controls() {
    if (sprt.noControl) {
        return;
    }
    sprt.xx = 0;
    spaceKey.alt = false;
    if (gamePad) {
        gamePad.aL.dwn = false;
        gamePad.aR.dwn = false;
        pointers2Buttons(game.input.mousePointer);
        pointers2Buttons(game.input.pointer1);
        pointers2Buttons(game.input.pointer2);
        if (gamePad.aL.dwn) {
            sprt.xx = -1;
        }
        if (gamePad.aR.dwn) {
            sprt.xx = 1;
        }
    }
    if (cursors.left.isDown || wasd.left.isDown) {
        sprt.xx = -1;
    }
    if (cursors.right.isDown || wasd.right.isDown) {
        sprt.xx = 1;
    }
    if (cursors.up.isDown || wasd.up.isDown) {
        spaceKey.alt = true;
    }
    if (spaceKey.isDown || spaceKey.alt) {
        if (!spaceKey.hold) {
            sprt.keyDown = true;
        }
        spaceKey.hold = true;
    } else {
        spaceKey.hold = null;
        sprt.keyDown = null;
    }
    if (sprt.keyDown && !sprt.ju) {
        fxPlay(sfx.fxJump);
        fxPlay(sfx.fxHup);
        sprt.yy = sprt.jh;
        sprt.ju = true;
        sprt.keyDown = null;
    }
}
function saniCode() {
    var sani = "idle";
    if (sprt.xx != 0) {
        sani = 'run';
    }
    if (sprt.ju) {
        sani = "jump";
        if (sprt.yy > 0) {
            sani = "fall";
        }
    }
    if (sprt.dd) {
        sprt.angle += 3 * -sprt.scale.x;
        sani = "dd";
    }
    if (sprt.animations.name != sani) {
        sprt.play(sani, null, true);
    }
}
function parCode() {
    for (var i = 0; i < pars.length; i++) {
        var p = pars[i];
        p.angle += p.rot;
        p.x += p.xx;
        p.y += p.yy;
        p.yy += 0.6;
        p.xx = p.xx * 0.98;
        if (p.y > world.limB + 200) {
            pars.splice(i, 1);
            if (p != sprt) {
                p.destroy();
            }
            i--;
        }
    }
}
function bgCode() {
    world.bg0.height = screenHeight;
    world.bg.height = screenHeight;
    world.bg.tilePosition.x += world.bg.xx;
    world.bg.tilePosition.y += world.bg.yy;
}
function quakeCode() {
    if (world.q) {
        game.camera.x += Math.random() * world.q - world.q / 2;
        game.camera.y += Math.random() * world.q - world.q / 2;
        world.q -= 1;
        if (world.q < 0) {
            world.q = null;
        }
    }
}
