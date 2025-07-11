var APP_DATA = {
  "scenes": [
    {
      "id": "0-fora-da-escola-",
      "name": "fora da escola ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -0.3182529951375024,
        "pitch": -0.09916326027468791,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.34061785346331774,
          "pitch": 0.2794057679462405,
          "rotation": 0,
          "target": "1-portaria-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1222590225247977,
          "pitch": -0.04047980775542115,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Escola Secundária de Resende&nbsp;</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Entrada da Escola&nbsp;</font></font>"
        }
      ]
    },
    {
      "id": "1-portaria-",
      "name": "portaria ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.5505696912250819,
          "pitch": 0.4546370068219616,
          "rotation": 0,
          "target": "2-patio-da-escola-"
        },
        {
          "yaw": -3.0616755183820583,
          "pitch": 0.2917318435772458,
          "rotation": 0,
          "target": "0-fora-da-escola-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7614025729009413,
          "pitch": -0.10276890143287787,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Portaria&nbsp;</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-patio-da-escola-",
      "name": "patio da escola ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.9516146141566448,
          "pitch": 0.14171749689612945,
          "rotation": 0,
          "target": "3-escola-centro"
        },
        {
          "yaw": 2.732547884922065,
          "pitch": 0.0944359352005133,
          "rotation": 1.5707963267948966,
          "target": "1-portaria-"
        },
        {
          "yaw": -0.06014511130257283,
          "pitch": 0.2468114238485981,
          "rotation": 0,
          "target": "20-corredor-para-a-sala-de-musica-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-escola-centro",
      "name": "escola centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 3.1382158145312875,
          "pitch": 0.42379463871474243,
          "rotation": 0,
          "target": "2-patio-da-escola-"
        },
        {
          "yaw": -1.6460401249043262,
          "pitch": 0.12964097072791603,
          "rotation": 0,
          "target": "23-corredor-2"
        },
        {
          "yaw": 1.8146322700492732,
          "pitch": 0.2632840530378502,
          "rotation": 0,
          "target": "19-corredor-para-as-salas-de-aulas-"
        },
        {
          "yaw": 0.0030627226209727354,
          "pitch": 0.25265423398809794,
          "rotation": 0,
          "target": "7-corredor-das-casas-de-banho"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0069375398252483,
          "pitch": 0.0760649015370074,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Receção</font></font></span>",
          "text": "<br>"
        },
        {
          "yaw": -2.3310341699438286,
          "pitch": 0.06008894754133465,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Secretaria&nbsp;</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "4-corredor-principal",
      "name": "corredor principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -2.086600639900496,
          "pitch": 0.23765434293997245,
          "rotation": 0,
          "target": "2-patio-da-escola-"
        },
        {
          "yaw": -1.3113837816642722,
          "pitch": 0.19783111315644675,
          "rotation": 0.7853981633974483,
          "target": "23-corredor-2"
        },
        {
          "yaw": 0.8468041890368596,
          "pitch": 0.32221272952868674,
          "rotation": 0,
          "target": "7-corredor-das-casas-de-banho"
        },
        {
          "yaw": -3.024699614126856,
          "pitch": 0.19566865541355583,
          "rotation": 4.71238898038469,
          "target": "19-corredor-para-as-salas-de-aulas-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.03423822286352696,
          "pitch": 0.06890645955683006,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Elevador&nbsp;</font></font>",
          "text": "<br>"
        },
        {
          "yaw": 2.4535192550182643,
          "pitch": 0.1541887523822325,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Receção</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-receo",
      "name": "receção",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 1.5191717072644382,
          "pitch": 0.059956056225647814,
          "rotation": 0,
          "target": "2-patio-da-escola-"
        },
        {
          "yaw": 2.010507916245981,
          "pitch": 0.0813039412995682,
          "rotation": 0,
          "target": "23-corredor-2"
        },
        {
          "yaw": 2.9275965832849433,
          "pitch": 0.3042030512513936,
          "rotation": 0.7853981633974483,
          "target": "10-corredor-das-salas-de-tic-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corredor-1-",
      "name": "corredor 1 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 0.3715261804300578,
          "pitch": 0.055155430468888156,
          "rotation": 0,
          "target": "2-patio-da-escola-"
        },
        {
          "yaw": 0.9212409383862425,
          "pitch": 0.23733868851552842,
          "rotation": 0.7853981633974483,
          "target": "23-corredor-2"
        },
        {
          "yaw": -2.9998889682886833,
          "pitch": 0.5225740722381094,
          "rotation": 0,
          "target": "7-corredor-das-casas-de-banho"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1544092120827054,
          "pitch": 0.04085799325092587,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Elevador&nbsp;</font></font>",
          "text": "<br>"
        },
        {
          "yaw": -1.1049657334596592,
          "pitch": 0.13345725468552594,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Receção</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "7-corredor-das-casas-de-banho",
      "name": "corredor das casas de banho",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -2.9948000690585204,
          "pitch": 0.4777650398918585,
          "rotation": 0,
          "target": "3-escola-centro"
        },
        {
          "yaw": -1.426340909290392,
          "pitch": 0.33310820010415654,
          "rotation": 10.995574287564278,
          "target": "8-casa-de-banho-feminino-"
        },
        {
          "yaw": -1.0321873692665093,
          "pitch": 0.3520837728404871,
          "rotation": 0.7853981633974483,
          "target": "9-casa-de-banho-masculino"
        },
        {
          "yaw": 0.09084540610712466,
          "pitch": 0.34218834554730293,
          "rotation": 0,
          "target": "11-escadas-para-o-piso-a1--res-chao-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.266447451538042,
          "pitch": 0.0044400308921535014,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Casas de Banho</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Femininas&nbsp;</font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">/ Adaptadas /Masculinas</font></font>"
        }
      ]
    },
    {
      "id": "8-casa-de-banho-feminino-",
      "name": "casa de banho feminino ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 2.9390990146024,
          "pitch": 0.9449630578950767,
          "rotation": 4.71238898038469,
          "target": "7-corredor-das-casas-de-banho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-casa-de-banho-masculino",
      "name": "casa de banho masculino",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -2.58237449277331,
          "pitch": 0.6362032622973643,
          "rotation": 7.0685834705770345,
          "target": "7-corredor-das-casas-de-banho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-corredor-das-salas-de-tic-",
      "name": "corredor das salas de TIC ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 0.7726756241841457,
          "pitch": 0.38135190820579723,
          "rotation": 0.7853981633974483,
          "target": "11-escadas-para-o-piso-a1--res-chao-"
        },
        {
          "yaw": -0.17780885198024698,
          "pitch": 0.301831790317058,
          "rotation": 0,
          "target": "12-corredor-para-a-sala-ev"
        },
        {
          "yaw": -2.925863764242255,
          "pitch": 0.27837531250437664,
          "rotation": 0.7853981633974483,
          "target": "7-corredor-das-casas-de-banho"
        },
        {
          "yaw": 2.9704750583398507,
          "pitch": 0.3984159579359723,
          "rotation": 0,
          "target": "4-corredor-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-escadas-para-o-piso-a1--res-chao-",
      "name": "escadas para o piso A.1 / res chao ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -1.0583792624291384,
          "pitch": 0.3567533742130955,
          "rotation": 0.7853981633974483,
          "target": "12-corredor-para-a-sala-ev"
        },
        {
          "yaw": -2.6558142505741316,
          "pitch": 0.349108226037286,
          "rotation": 6.283185307179586,
          "target": "3-escola-centro"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6484485966386098,
          "pitch": -0.2130934141506664,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Salas de Informática&nbsp;</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">TIC 1 / 2</font></font>"
        }
      ]
    },
    {
      "id": "12-corredor-para-a-sala-ev",
      "name": "corredor para a sala EV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 2.251490320421386,
          "pitch": 0.3321710182919233,
          "rotation": 0.7853981633974483,
          "target": "11-escadas-para-o-piso-a1--res-chao-"
        },
        {
          "yaw": 0.023518869224339767,
          "pitch": 0.43934228362244276,
          "rotation": 12.566370614359176,
          "target": "13-sala-de-ev-"
        },
        {
          "yaw": -3.0956338829462275,
          "pitch": 0.3521395885752874,
          "rotation": 0,
          "target": "4-corredor-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sala-de-ev-",
      "name": "Sala de EV ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 0.32232353459639107,
          "pitch": 0.28971762096430353,
          "rotation": 0.7853981633974483,
          "target": "15-sala-de-tic-3"
        },
        {
          "yaw": 2.865876677741026,
          "pitch": 0.4786441531797916,
          "rotation": 0,
          "target": "10-corredor-das-salas-de-tic-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3842766381345264,
          "pitch": -0.07487776075874208,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Sala de Informática</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">TIC 3</font></font>"
        }
      ]
    },
    {
      "id": "14-corredor-da-sala-de-tic-3",
      "name": "corredor da sala de tic 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 3.0207311109529993,
          "pitch": 0.2943293217278722,
          "rotation": 0,
          "target": "12-corredor-para-a-sala-ev"
        },
        {
          "yaw": 1.8732694586962975,
          "pitch": 0.44221717572114727,
          "rotation": 0,
          "target": "15-sala-de-tic-3"
        },
        {
          "yaw": -0.16687053944845687,
          "pitch": 0.39199158730570893,
          "rotation": 6.283185307179586,
          "target": "16-corredor-para-a-sala-de-aula-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8122726380508993,
          "pitch": 0.06416442854848903,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Sala de Informática</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">TIC 3</font></font>"
        }
      ]
    },
    {
      "id": "15-sala-de-tic-3",
      "name": "sala de tic 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -3.1408131084638207,
          "pitch": 1.0333613020911763,
          "rotation": 0,
          "target": "14-corredor-da-sala-de-tic-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-corredor-para-a-sala-de-aula-",
      "name": "corredor para a sala de aula ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.6147266581060897,
          "pitch": 0.4908687697834875,
          "rotation": 0,
          "target": "17-entrada-da-sala-de-aulas-"
        },
        {
          "yaw": 2.538777161449948,
          "pitch": 0.41166824760929543,
          "rotation": 0,
          "target": "14-corredor-da-sala-de-tic-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-entrada-da-sala-de-aulas-",
      "name": "entrada da sala de aulas ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 2.144785016619359,
          "pitch": 0.396483084832262,
          "rotation": 0,
          "target": "16-corredor-para-a-sala-de-aula-"
        },
        {
          "yaw": -1.0561855282564636,
          "pitch": 0.565858612701426,
          "rotation": 4.71238898038469,
          "target": "18-sala-de-aula-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.236218933124313,
          "pitch": 0.029731301556864764,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Sala de aula&nbsp;</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">A1.09</font></font>"
        }
      ]
    },
    {
      "id": "18-sala-de-aula-",
      "name": "sala de aula ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -2.2809984291207055,
          "pitch": 0.35414367231016186,
          "rotation": 5.497787143782138,
          "target": "17-entrada-da-sala-de-aulas-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-corredor-para-as-salas-de-aulas-",
      "name": "corredor para as salas de aulas ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 2.5784196743883694,
          "pitch": 0.2929906725341951,
          "rotation": 4.71238898038469,
          "target": "2-patio-da-escola-"
        },
        {
          "yaw": -0.08587437152154109,
          "pitch": 0.15652375850542732,
          "rotation": 0,
          "target": "20-corredor-para-a-sala-de-musica-"
        },
        {
          "yaw": 3.0434537766220613,
          "pitch": 0.21256652584340685,
          "rotation": 0,
          "target": "23-corredor-2"
        },
        {
          "yaw": -2.330050988580229,
          "pitch": 0.28114719161473545,
          "rotation": 0.7853981633974483,
          "target": "4-corredor-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-corredor-para-a-sala-de-musica-",
      "name": "corredor para a sala de musica ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 1.6973678315499425,
          "pitch": 0.5779789939072675,
          "rotation": 0,
          "target": "2-patio-da-escola-"
        },
        {
          "yaw": -0.029933622204001864,
          "pitch": 0.3335164157300561,
          "rotation": 0,
          "target": "21-corredor-da-sala-de-musicaaulas"
        },
        {
          "yaw": -3.0802353106651736,
          "pitch": 0.678223940524024,
          "rotation": 0,
          "target": "19-corredor-para-as-salas-de-aulas-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-corredor-da-sala-de-musicaaulas",
      "name": "corredor da sala de musica/aulas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.5869518138663512,
          "pitch": 0.4381714151289131,
          "rotation": 4.71238898038469,
          "target": "22-sala-de-musica-"
        },
        {
          "yaw": -3.059037922010358,
          "pitch": 0.37371152066846136,
          "rotation": 0,
          "target": "20-corredor-para-a-sala-de-musica-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1634473477542926,
          "pitch": -0.07201759165032406,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Salas de aulas&nbsp;</font></font>",
          "text": "<br>"
        },
        {
          "yaw": -0.6897269056659248,
          "pitch": -0.16358157222541791,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Sala de música&nbsp;</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "22-sala-de-musica-",
      "name": "sala de musica ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -2.4359173984087903,
          "pitch": 0.30264204261554006,
          "rotation": 0.7853981633974483,
          "target": "21-corredor-da-sala-de-musicaaulas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-corredor-2",
      "name": "corredor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 3.122509584756532,
          "pitch": 0.2918023657797697,
          "rotation": 0,
          "target": "3-escola-centro"
        },
        {
          "yaw": -0.02876100853323038,
          "pitch": 0.38785005679116225,
          "rotation": 0,
          "target": "24-corredor--dos-psicologos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4373542739510281,
          "pitch": 0.0215947014725959,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Casas de Banho&nbsp;</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Professores / Funcionários&nbsp;</font></font>"
        }
      ]
    },
    {
      "id": "24-corredor--dos-psicologos",
      "name": "corredor  dos psicologos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.44625388105520614,
          "pitch": 0.2452053439390678,
          "rotation": 0,
          "target": "25-corredor-para-a-papelaria-"
        },
        {
          "yaw": 2.7357807231824953,
          "pitch": 0.45193629530158574,
          "rotation": 0,
          "target": "23-corredor-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7178099756608614,
          "pitch": -0.2947063397822305,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Gabinete dos Psicologos&nbsp;</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "25-corredor-para-a-papelaria-",
      "name": "corredor para a papelaria ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 0.03777063466781172,
          "pitch": 0.24517844556243418,
          "rotation": 0,
          "target": "26-corredor-para-o-polivalentecantina-"
        },
        {
          "yaw": -3.087673040015254,
          "pitch": 0.28703779768663473,
          "rotation": 0,
          "target": "23-corredor-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3819301079916073,
          "pitch": 0.07804804912795049,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Papelaria&nbsp;</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "26-corredor-para-o-polivalentecantina-",
      "name": "corredor para o polivalente/cantina ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 3.051923279755645,
          "pitch": 0.33599020184917805,
          "rotation": 5.497787143782138,
          "target": "30-polivalente-"
        },
        {
          "yaw": -0.004435414721841724,
          "pitch": 0.44680921008150776,
          "rotation": 0,
          "target": "27-fila-para-o-refeitrio"
        },
        {
          "yaw": -1.7757516963003646,
          "pitch": 0.33853468572077716,
          "rotation": 0,
          "target": "24-corredor--dos-psicologos"
        },
        {
          "yaw": -2.021759879680946,
          "pitch": 0.20181579393277715,
          "rotation": 4.71238898038469,
          "target": "29-bufete-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7847446019895328,
          "pitch": -0.09297074244918413,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Polivalente&nbsp;</font></font>",
          "text": "<br>"
        },
        {
          "yaw": -2.0928069203263675,
          "pitch": -0.05086304422984256,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Bufete</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "27-fila-para-o-refeitrio",
      "name": "Fila para o refeitório",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 0.0371375961476641,
          "pitch": 0.3277006020693136,
          "rotation": 0.7853981633974483,
          "target": "28-refeitrio"
        },
        {
          "yaw": 2.6535674280848163,
          "pitch": 0.39383162692118034,
          "rotation": 4.71238898038469,
          "target": "26-corredor-para-o-polivalentecantina-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5257396490031283,
          "pitch": 0.034981558363398335,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Refeitório</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "28-refeitrio",
      "name": "refeitório",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 2.5045832368142635,
          "pitch": 0.42373939505274905,
          "rotation": 0,
          "target": "27-fila-para-o-refeitrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-bufete-",
      "name": "bufete ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 2.775089187001381,
          "pitch": 0.40556111104935333,
          "rotation": 6.283185307179586,
          "target": "25-corredor-para-a-papelaria-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-polivalente-",
      "name": "polivalente ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -2.738855828142423,
          "pitch": 0.5338620363380038,
          "rotation": 0,
          "target": "26-corredor-para-o-polivalentecantina-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ExploraEscolas",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
