import React, { useEffect, useMemo } from "react";
import ReactWebChat, { createDirectLine } from "botframework-webchat";

import "./WebChat.css";

const WebChat = ({
  className,
  onFetchToken,
  adaptiveHostConfig,
  store,
  styleSet,
  styleOptions,
  token,
}) => {
  const directLine = useMemo(() => createDirectLine({ token }), [token]);

  useEffect(() => {
    onFetchToken();
  }, [onFetchToken]);

  return token ? (
    <ReactWebChat
      adaptiveCardsHostConfig={adaptiveHostConfig}
      className={`${className || ""} web-chat`}
      directLine={directLine}
      sendTypingIndicator={true}
      store={store}
      styleSet={styleSet}
      styleOptions={styleOptions}
    />
  ) : (
    <div className={`${className || ""} connect-spinner`}>
      <div className="content">
        <div className="icon">
          <span className="ms-Icon ms-Icon--Robot" />
        </div>
        <p>Please wait while we are connecting.</p>
      </div>
    </div>
  );
};

export default WebChat;
