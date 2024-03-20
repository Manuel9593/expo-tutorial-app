import { ImageSourcePropType } from "react-native";

// Declare images sources
declare module '*.jpg' {
    const value: string
    export = value as ImageSourcePropType
}
declare module '*.jpeg'{
    const value: ImageSourcePropType
    export = value as ImageSourcePropType
}
declare module '*.png'{
    const value: ImageSourcePropType
    export = value as ImageSourcePropType
}
declare module '*.svg'{
    const value: ImageSourcePropType
    export = value as ImageSourcePropType
}