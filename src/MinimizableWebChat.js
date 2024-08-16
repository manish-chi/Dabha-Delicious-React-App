import classNames from "classnames";
import React, { useEffect, useCallback, useMemo, useState } from "react";
import { createStore, createStyleSet } from "botframework-webchat";

import WebChat from "./WebChat";

import "./fabric-icons-inline.css";
import "./MinimizableWebChat.css";

const MinimizableWebChat = (loginInfo) => {
  console.log(loginInfo.value.userId);

  const store = useMemo(
    () =>
      createStore({}, ({ dispatch }) => (next) => (action) => {
        if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
          console.log('Hey have you reached!!');
          dispatch({
            type: "WEB_CHAT/SEND_EVENT",
            payload: {
              name: "webchat/join",
              value: {
                data: {
                  name: loginInfo.value.name,
                  email: loginInfo.value.email,
                  location: loginInfo.value.location,
                  phoneNumber : loginInfo.value.phoneNumber,
                  userId : loginInfo.value.userId,
                },
              },
            },
          });
        } else if (action.type === "DIRECT_LINE/INCOMING_ACTIVITY") {
          console.log(action.payload);
          if (action.payload.activity.type === 'message') {
            console.log(document.body);

            let adaptiveCards = document.body.getElementsByClassName('ac-pushButton style-default ac-selectable');
            console.log(adaptiveCards);
            // const val = Array.from(adaptiveCards);
            // console.log(val.length);
            // console.log(adaptiveCards.length);
            for(let i = 0; i <= 2; i++) {
              console.log(adaptiveCards.length);
              if( adaptiveCards[i] && adaptiveCards[i].innerText === 'Submit') {
                adaptiveCards[i].className += ' button-dev';
              }
            }
          }

          if (action.payload.activity.from.role === "bot") {
            setNewMessage(true);
          }
        }
        return next(action);
      }),
    []
  );

  const styleSet = useMemo(() =>
    createStyleSet({
      primaryFont: "Poppins, sans-serif",
      backgroundColor: "Transparent",
      bubbleBorderColor: "rgb(230, 108, 51)",
      sendBoxButtonColorOnHover: "#ff9742",
      bubbleFromUserBackground: "rgb(230, 108, 51)",
      sendBoxBorderTop: "solid 2px rgb(230, 108, 51)",
      bubbleBorderRadius: 19,
      bubbleFromUserBorderRadius: 19,
      suggestedActionBorderColor: "rgb(230, 108, 51)",
      suggestedActionBorderRadius: 9,
      suggestedActionTextColor: "rgb(230, 108, 51)",
      cardEmphasisBackgroundColor : "rgb(230, 108, 51)",
      cardPushButtonTextColor : "rgb(230, 108, 51)",
      cardPushButtonBackgroundColor: "rgb(230, 108, 51)",
    })
  );

  const styleOptions = {
    hideUploadButton: true,
    botAvatarImage:
      "https://image.similarpng.com/very-thumbnail/2021/06/Chef-icon-illustration-on-transparent-background-PNG.png",
    botAvatarInitials: "BF",
    userAvatarImage: `https://media.licdn.com/dms/image/D5603AQHPPdjKt5J_5g/profile-displayphoto-shrink_800_800/0/1684515034933?e=1727913600&v=beta&t=kxQ7JSU1WrVunYRTIQEZ1LqcFVeXqsltpRagNBnDaSg`,
    userAvatarInitials: "WC",
    bubbleBorderWidth: 12,
    bubbleNubSize: 5,
    bubbleFromUserBorderWidth: 12,
    bubbleFromUserNubSize: 5,
    bubbleNubOffset: "top",
    bubbleFromUserNubOffset: "top",
    suggestedActionLayout:'carousel',
    suggestedActionsStackedLayoutButtonMaxHeight :20,
  };
  

  const HostConfig = {
    "mode": "debug",
    "choiceSetInputValueSeparator": ",",
    "supportsInteractivity": true,
    "fontFamily": "Poppins, sans-serif",
    "spacing": {
        "small": 4,
        "default": 8,
        "medium": 20,
        "large": 30,
        "extraLarge": 40,
        "padding": 10
    },
    "separator": {
        "lineThickness": 1,
        "lineColor": "#00000015",
        "spacing": 12
    },
    "fontSizes": {
        "small": 8,
        "default": 12, //subtitle
        "medium": 17, //Title
        "large": 30,
        "extraLarge": 52
    },
    "fontWeights": {
        "lighter": 200,
        "default": 400,
        "bolder": 700
    },
    "imageSizes": {
        "small": 20,
        "medium": 36,
        "large": 150
    },
    "containerStyles": {
        "default": {
            "foregroundColors": {
                "default": {
                    "default": "#f0670c",
                    "subtle": "#f0670c"
                },
                "dark": {
                    "default": "#f0670c",
                    "subtle": "#00000066"
                },
                "light": {
                    "default": "#f0670c",
                    "subtle": "#FFFFFF33"
                },
                "accent": {
                    "default": "#f0670c",
                    "subtle": "#006ae2b2"
                },
                "good": {
                    "default": "#f0670c",
                    "subtle": "#048e2eb2"
                },
                "warning": {
                    "default": "#f0670c",
                    "subtle": "#eb7b07b2"
                },
                "attention": {
                    "default": "#f0670c",
                    "subtle": "#c80000b2"
                }
            },
            "backgroundColor": "#FFFFFF"
        },
        "emphasis": {
            "foregroundColors": {
                "default": {
                    "default": "#f0670c",
                    "subtle": "#00000066"
                },
                "dark": {
                    "default": "#f0670c",
                    "subtle": "#00000066"
                },
                "light": {
                    "default": "#f0670c",
                    "subtle": "#FFFFFF33"
                },
                "accent": {
                    "default": "#f0670c",
                    "subtle": "#006ae2b2"
                },
                "good": {
                    "default": "#f0670c",
                    "subtle": "#048e2eb2"
                },
                "warning": {
                    "default": "#f0670c",
                    "subtle": "#eb7b07b2"
                },
                "attention": {
                    "default": "#f0670c",
                    "subtle": "#c80000b2"
                }
            },
            "backgroundColor": "#FFFFFF00"
        }
    },
    "actions": {
        "maxActions": 2,
        "spacing": "large",
        "buttonSpacing": 0,
        "style":"default",
        "showCard": {
            "actionMode": "inline",
            "inlineTopMargin": 16,
            "style": "default"
        },
        "submit": {
            "actionMode": "inline",
            "inlineTopMargin": 16,
            "style": "default"
        },
        "preExpandSingleShowCardAction": false,
        "actionsOrientation": "horizontal",
        "actionAlignment": "left"
    },
    "adaptiveCard": {
        "allowCustomStyle": true
    },
    "imageSet": {
        "imageSize": "medium",
        "maxImageHeight": 100
    },
    "factSet": {
        "title": {
            "size": "default",
            "color": "default",
            "isSubtle": false,
            "weight": "bolder",
            "warp": true
        },
        "value": {
            "size": "default",
            "color": "default",
            "isSubtle": false,
            "weight": "default",
            "warp": true
        },
        "spacing": 10
    },
    "input": {
        "default": {
            "color": "#f0670c",
            "focusColor": "#000000",
            "backgroundColor": "#F3F3F3",
            "focusBackgroundColor": "#FFFFFF",
            "borderColor": "#F3F3F3",
            "focusBorderColor": "#f0670c"
        },
        "emphasis": {
            "color": "#000000",
            "focusColor": "#000000",
            "backgroundColor": "#FFFFFF",
            "focusBackgroundColor": "#FFFFFF",
            "borderColor": "#f0670c",
            "focusBorderColor": "#006ae2"
        }
    }
}



  const [loaded, setLoaded] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [newMessage, setNewMessage] = useState(false);
  const [side, setSide] = useState("right");
  const [token, setToken] = useState();

  // To learn about reconnecting to a conversation, see the following documentation:
  // https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0-reconnect-to-conversation?view=azure-bot-service-4.0

  const handleFetchToken = useCallback(async () => {
    if (!token) {
      //  const res = await fetch('https://dabadeliciousapp.azurewebsites.net/directline/token', { method: 'POST' });
      //  let { token } = await res.json();
      let token = "qOonFjBjTss.VXllym7_IRdqsrXWBr3xG5gaM4zbUoJF2sx2HAHEaaA";
      setToken(token);
    }
  }, [setToken, token]);

  const handleMaximizeButtonClick = useCallback(async () => {
    setLoaded(true);
    setMinimized(false);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  const handleMinimizeButtonClick = useCallback(() => {
    setMinimized(true);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  const handleSwitchButtonClick = useCallback(() => {
    setSide(side === "left" ? "right" : "left");
  }, [setSide, side]);

  // TODO: [P2] Currently, we cannot unmount Web Chat from DOM when it is minimized.
  //       Today, if we unmount it, Web Chat will call disconnect on DirectLineJS object.
  //       When minimized, we still want to maintain that connection while the UI is gone.
  //       This is related to https://github.com/microsoft/BotFramework-WebChat/issues/2750.

  return (
    <div className="minimizable-web-chat">
      {minimized && (
        <button className="maximize" onClick={handleMaximizeButtonClick}>
          <span
            className={
              token
                ? "ms-Icon ms-Icon--MessageFill"
                : "ms-Icon ms-Icon--Message"
            }
          />
          {newMessage && (
            <span className="ms-Icon ms-Icon--CircleShapeSolid red-dot" />
          )}
        </button>
      )}
      {loaded && (
        <div
          className={classNames(
            side === "left" ? "chat-box left" : "chat-box right",
            minimized ? "hide" : ""
          )}
        >
          <header>
            <div className="filler" />
            <button className="switch" onClick={handleSwitchButtonClick}>
              <span className="ms-Icon ms-Icon--Switch" />
            </button>
            <button className="minimize" onClick={handleMinimizeButtonClick}>
              <span className="ms-Icon ms-Icon--ChromeMinimize" />
            </button>
          </header>
          <WebChat
            className="react-web-chat"
            onFetchToken={handleFetchToken}
            adaptiveHostConfig={HostConfig}
            store={store}
            styleSet={styleSet}
            styleOptions={styleOptions}
            token={token}
          />
        </div>
      )}
    </div>
  );
};

export default MinimizableWebChat;
