import { createIconSetFromIcoMoon } from "@expo/vector-icons";
// フォントが読み込まれるまでの間に表示するコンポーネント
import { useFonts } from "expo-font";

import fontData from "../../assets/fonts/icomoon.ttf";
import fontSelection from "../../assets/fonts/selection.json";

const CustomeIcon = createIconSetFromIcoMoon(fontSelection, "icomoon", fontData);

interface Props {
    name: string;
    size: number;
    color: string;
}

const Icon = (props: Props) => {
    const { name, size, color } = props;

    const [loaded] = useFonts({
        icomoon: fontData,
    });

    if (!loaded) {
        return null;
    }

    return <CustomeIcon name={name} size={size} color={color} />;
};

export default Icon;



