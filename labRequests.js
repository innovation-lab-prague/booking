var labEvents = [
  { title: 'COP Meeting / Inga M.',      start: '2018-05-30T16:30:00',  end: '2018-05-30T18:00:00', resourceId: 'A-ROUNDTABLE'   },
  { title: 'Maintenance work / Booth',   start: '2018-06-01T08:00:00',  end: '2018-06-01T12:00:00', resourceId: 'X-MAINT'        },
  { title: 'COP Scrum Meeting / Josef P.', start: '2018-06-04',         end: '2018-06-07',          resourceId: 'B-LONGTABLE'    },
  { title: 'Risk IT Meeting / Dirk K.',  start: '2018-06-04T14:00:00',  end: '2018-06-04T15:30:00', resourceId: 'C-MEETROOM'     },
  { title: 'Risk IT RDS/GUI Meeting / Dirk K.',  start: '2018-06-07T13:00:00',  end: '2018-06-07T14:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Statistix Meeting',  start: '2018-06-07T15:00:00',  end: '2018-06-07T16:00:00', resourceId: 'C-MEETROOM'             },
  { title: 'React/Angular Review / Dirk K.',  start: '2018-06-08T14:00:00',  end: '2018-06-08T15:30:00', resourceId: 'C-MEETROOM'},
  { title: 'Risk IT Meetup / Adam N.',  start: '2018-06-11T13:00:00',  end: '2018-06-11T14:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Telco / Wolfgang E.',        start: '2018-06-11T14:30:00',  end: '2018-06-11T15:00:00', resourceId: 'C-MEETROOM'     },
  { title: 'FM Photoshoot / Ondrej H. ', start: '2018-06-13T09:00:00',  end: '2018-06-13T10:00:00', resourceId: 'C-MEETROOM'     },
  { title: 'HR Welcome Days / Vera S. ', start: '2018-06-14T08:00:00',  end: '2018-06-14T12:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'Meeting with ext. / Pavel T.', start: '2018-06-14T12:00:00',  end: '2018-06-14T18:00:00', resourceId: 'C-MEETROOM'    },
  { title: 'POM Meeting / Misa C.',      start: '2018-06-19T14:00:00',  end: '2018-06-19T15:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'M&M Farewell',               start: '2018-06-28T14:00:00',  end: '2018-06-28T18:00:00', resourceId: 'B-LONGTABLE'    }, 
  { title: 'StatistiX / Ondrej.S.',  start: '2018-06-19T11:00:00',  end: '2018-06-019T12:00:00',    resourceId: 'C-MEETROOM'     },
  { title: 'TKAMs / Sam B.',  start: '2018-06-20T14:00:00',      end: '2018-06-20T15:00:00',        resourceId: 'B-LONGTABLE'    },
  { title: 'TKAMs / Sam B.',  start: '2018-06-21T11:00:00',      end: '2018-06-21T12:00:00',        resourceId: 'B-LONGTABLE'    },
  { title: 'Energy Meet / Blanka M.',  start: '2018-06-21T14:00:00',      end: '2018-06-21T15:00:00',  resourceId: 'C-MEETROOM'    },
  { title: 'AMOR Dashboard discussion ',  start: '2018-06-21T15:00:00',  end: '2018-06-21T15:30:00',   resourceId: 'C-MEETROOM'    },
  { title: 'Meet with CVUT rep. / Adela K.',  start: '2018-06-21T15:30:00',  end: '2018-06-21T16:00:00',  resourceId: 'C-MEETROOM'    },
  { title: 'Workflow meet / Martin S.',  start: '2018-06-22T08:30:00',  end: '2018-06-22T09:00:00',  resourceId: 'C-MEETROOM'  },
  { title: 'Opentext Enterprise scan / Pavel T.',  start: '2018-06-22T09:30:00',   end: '2018-06-22T15:30:00', resourceId: 'C-MEETROOM'     },
  { title: 'Coodo Showcase / Anderson M.', start: '2018-06-26T14:00:00',  end: '2018-06-26T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'STX mngm meeting / Ondrej S.',  start: '2018-06-26T10:30:00', end: '2018-06-26T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Clearstream meeting / Michaela C.',  start: '2018-06-26T14:30:00', end: '2018-06-26T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'IT Infrastructure Tools Team Workshop / Josef T.',  start: '2018-07-09T13:00:00', end: '2018-07-10T17:00:00',  resourceId: 'B-LONGTABLE' },
  { title: 'IT Infrastructure Tools Team Workshop / Josef T.',  start: '2018-07-11T09:00:00', end: '2018-07-11T16:00:00',  resourceId: 'C-MEETROOM' },
  { title: 'EDT Workshop / Martin S.', start: '2018-07-11', end: '2018-07-14',   resourceId: 'B-LONGTABLE' },
  { title: 'FAR tool sprint planning / Anderson M.',  start: '2018-07-12T14:30:00', end: '2018-07-12T16:00:00',  resourceId: 'C-MEETROOM' },
  { title: 'DifferenceClaimTool sprint end / Marek P.', start: '2018-07-17T10:00:00', end: '2018-07-17T17:00:00', resourceId: 'A-ROUNDTABLE'   },
  { title: 'F5 Workshop / Gabor B.',  start: '2018-07-18', end: '2018-07-20',  resourceId: 'C-MEETROOM' },
  { title: 'FAR Q&A Session on Business requirements / Anderson M.',  start: '2018-07-25T14:00:00', end: '2018-07-25T16:30:00', resourceId: 'C-MEETROOM'},
  { title: 'FAR Sprint Planning / Anderson M.', start: '2018-07-26T11:00:00', end: '2018-07-26T13:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Tosca Robotics Exchange / Martin S.',  start: '2018-07-26T14:00:00',   end: '2018-07-26T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'HR Meeting / Hana M.',       start: '2018-07-30T15:00:00', end: '2018-07-30T17:00:00',    resourceId: 'C-MEETROOM'     },
  { title: 'Innovation lab talk / Marek H.',  start: '2018-08-01T15:00:00', end: '2018-08-01T16:30:00',   resourceId: 'B-LONGTABLE'},
  { title: 'MFP Config & Overview / Michal P.',  start: '2018-08-02T11:30:00', end: '2018-08-02T12:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'Labor Union Meeting / Pavel R.',  start: '2018-08-02T14:30:00', end: '2018-08-02T16:00:00',   resourceId: 'B-LONGTABLE'    },   
  { title: 'Knative w/J. Beda / Martin Z.',  start: '2018-08-03T15:00:00', end: '2018-08-03T17:00:00',   resourceId: 'B-LONGTABLE'    },
  { title: 'Opentext Workshop-SAP / Pavel T.',   start: '2018-08-01', end: '2018-08-03',    resourceId: 'C-MEETROOM'     },
  { title: 'Prg meets Lux / Zuzana V.',  start: '2018-08-06T14:00:00', end: '2018-08-06T18:00:00',    resourceId: 'A-ROUNDTABLE'    },
  { title: 'Prg meets Lux / Zuzana V.',  start: '2018-08-07T14:00:00', end: '2018-08-07T18:00:00',    resourceId: 'A-ROUNDTABLE'    },
  { title: 'Prg meets Lux / Zuzana V.',  start: '2018-08-08T14:00:00', end: '2018-08-08T18:00:00',    resourceId: 'A-ROUNDTABLE'     },
  { title: 'HR SSC Prague Meeting / Hana M.',  start: '2018-08-16', end: '2018-08-16',    resourceId: 'B-LONGTABLE'    },
  { title: 'Stoxx OpCo. / Stephanie K.',       start: '2018-08-29', end: '2018-08-31',    resourceId: 'B-LONGTABLE'    },
  { title: 'Risk IT MS Training / Dirk K.',    start: '2018-09-06', end: '2018-09-08',    resourceId: 'B-LONGTABLE'    },
  { title: 'Toastmasters Demo Session / Dirk K.',    start: '2018-09-11T17:00:00', end: '2018-09-11T20:00:00',    resourceId: 'B-LONGTABLE'    },
  { title: 'COP Offsite Meeting / Armin B.',   start: '2018-10-10', end: '2018-10-12',    resourceId: 'C-MEETROOM'     },
  { title: 'ExCo Lunch / Konstanze O.',  start: '2018-12-06T10:00:00', end: '2018-12-06T15:00:00',     resourceId: 'C-MEETROOM' }
]
