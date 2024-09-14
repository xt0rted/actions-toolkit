// https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions

export type BrandingColor =
  | "white"
  | "yellow"
  | "blue"
  | "green"
  | "orange"
  | "red"
  | "purple"
  | "gray-dark"
  ;

export type BrandingIcon =
  | "activity"
  | "airplay"
  | "alert-circle"
  | "alert-octagon"
  | "alert-triangle"
  | "align-center"
  | "align-justify"
  | "align-left"
  | "align-right"
  | "anchor"
  | "aperture"
  | "archive"
  | "arrow-down-circle"
  | "arrow-down-left"
  | "arrow-down-right"
  | "arrow-down"
  | "arrow-left-circle"
  | "arrow-left"
  | "arrow-right-circle"
  | "arrow-right"
  | "arrow-up-circle"
  | "arrow-up-left"
  | "arrow-up-right"
  | "arrow-up"
  | "at-sign"
  | "award"
  | "bar-chart-2"
  | "bar-chart"
  | "battery-charging"
  | "battery"
  | "bell-off"
  | "bell"
  | "bluetooth"
  | "bold"
  | "book-open"
  | "book"
  | "bookmark"
  | "box"
  | "briefcase"
  | "calendar"
  | "camera-off"
  | "camera"
  | "cast"
  | "check-circle"
  | "check-square"
  | "check"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "chevrons-down"
  | "chevrons-left"
  | "chevrons-right"
  | "chevrons-up"
  | "circle"
  | "clipboard"
  | "clock"
  | "cloud-drizzle"
  | "cloud-lightning"
  | "cloud-off"
  | "cloud-rain"
  | "cloud-snow"
  | "cloud"
  | "code"
  | "command"
  | "compass"
  | "copy"
  | "corner-down-left"
  | "corner-down-right"
  | "corner-left-down"
  | "corner-left-up"
  | "corner-right-down"
  | "corner-right-up"
  | "corner-up-left"
  | "corner-up-right"
  | "cpu"
  | "credit-card"
  | "crop"
  | "crosshair"
  | "database"
  | "delete"
  | "disc"
  | "dollar-sign"
  | "download-cloud"
  | "download"
  | "droplet"
  | "edit-2"
  | "edit-3"
  | "edit"
  | "external-link"
  | "eye-off"
  | "eye"
  | "facebook"
  | "fast-forward"
  | "feather"
  | "file-minus"
  | "file-plus"
  | "file-text"
  | "file"
  | "film"
  | "filter"
  | "flag"
  | "folder-minus"
  | "folder-plus"
  | "folder"
  | "gift"
  | "git-branch"
  | "git-commit"
  | "git-merge"
  | "git-pull-request"
  | "globe"
  | "grid"
  | "hard-drive"
  | "hash"
  | "headphones"
  | "heart"
  | "help-circle"
  | "home"
  | "image"
  | "inbox"
  | "info"
  | "italic"
  | "layers"
  | "layout"
  | "life-buoy"
  | "link-2"
  | "link"
  | "list"
  | "loader"
  | "lock"
  | "log-in"
  | "log-out"
  | "mail"
  | "map-pin"
  | "map"
  | "maximize-2"
  | "maximize"
  | "menu"
  | "message-circle"
  | "message-square"
  | "mic-off"
  | "mic"
  | "minimize-2"
  | "minimize"
  | "minus-circle"
  | "minus-square"
  | "minus"
  | "monitor"
  | "moon"
  | "more-horizontal"
  | "more-vertical"
  | "move"
  | "music"
  | "navigation-2"
  | "navigation"
  | "octagon"
  | "package"
  | "paperclip"
  | "pause-circle"
  | "pause"
  | "percent"
  | "phone-call"
  | "phone-forwarded"
  | "phone-incoming"
  | "phone-missed"
  | "phone-off"
  | "phone-outgoing"
  | "phone"
  | "pie-chart"
  | "play-circle"
  | "play"
  | "plus-circle"
  | "plus-square"
  | "plus"
  | "pocket"
  | "power"
  | "printer"
  | "radio"
  | "refresh-ccw"
  | "refresh-cw"
  | "repeat"
  | "rewind"
  | "rotate-ccw"
  | "rotate-cw"
  | "rss"
  | "save"
  | "scissors"
  | "search"
  | "send"
  | "server"
  | "settings"
  | "share-2"
  | "share"
  | "shield-off"
  | "shield"
  | "shopping-bag"
  | "shopping-cart"
  | "shuffle"
  | "sidebar"
  | "skip-back"
  | "skip-forward"
  | "slash"
  | "sliders"
  | "smartphone"
  | "speaker"
  | "square"
  | "star"
  | "stop-circle"
  | "sun"
  | "sunrise"
  | "sunset"
  | "tablet"
  | "tag"
  | "target"
  | "terminal"
  | "thermometer"
  | "thumbs-down"
  | "thumbs-up"
  | "toggle-left"
  | "toggle-right"
  | "trash-2"
  | "trash"
  | "trending-down"
  | "trending-up"
  | "triangle"
  | "truck"
  | "tv"
  | "type"
  | "umbrella"
  | "underline"
  | "unlock"
  | "upload-cloud"
  | "upload"
  | "user-check"
  | "user-minus"
  | "user-plus"
  | "user-x"
  | "user"
  | "users"
  | "video-off"
  | "video"
  | "voicemail"
  | "volume-1"
  | "volume-2"
  | "volume-x"
  | "volume"
  | "watch"
  | "wifi-off"
  | "wifi"
  | "wind"
  | "x-circle"
  | "x-square"
  | "x"
  | "zap-off"
  | "zap"
  | "zoom-in"
  | "zoom-out"
  ;

export type SupportedNodeVersions =
  | "node12"
  | "node16"
  | "node20"
  ;

export interface ActionDefinition {
  name: string;
  author: string;
  description: string;
  inputs: Record<string, ActionInput>;
  outputs: Record<string, ActionOutput>;
  branding: {
    color: BrandingColor;
    icon: BrandingIcon;
  };
}

export interface CompositeAction extends ActionDefinition {
  runs: {
    using: "composite";
  };
}

export interface DockerAction extends ActionDefinition {
  runs: {
    using: "docker";
    image: string;
    "pre-entrypoint"?: string;
    entrypoint?: string;
    "post-entrypoint"?: string;
    args?: string[];
  };
}

export interface JavaScriptAction extends ActionDefinition {
  runs: {
    uses: SupportedNodeVersions;
    pre?: string;
    "pre-if"?: string;
    main: string;
    post?: string;
    "post-if"?: string;
  };
}

export interface ActionInput {
  description: string;
  required: boolean;
  default?: string;
  deprecationMessage?: string;
}

export interface ActionOutput {
  description: string;

  value?: string;

  /**
   * An example of the output value.
   * This is only used by the `update-readme` tool in this package.
   */
  _example?: string;
}
