import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import Animated from 'react-native-reanimated';
import { Path, G } from 'react-native-svg';

import { Svg } from '@/components/Icons/AnimatedIcons/Svg';
import { TabBar } from '@/components/TabBar';
import { type TabBarIconProps } from '@/components/TabBar/TabItem';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const tabBars = [
  {
    name: 'home',
    href: '/home',
    tabBarIcon: ({ animatedProps }: TabBarIconProps) => (
      <Svg>
        <AnimatedPath
          animatedProps={animatedProps}
          d="M27.3538 12.9713L17.3538 3.53626C17.3489 3.532 17.3443 3.5274 17.34 3.52251C16.9718 3.18768 16.492 3.00214 15.9944 3.00214C15.4967 3.00214 15.0169 3.18768 14.6488 3.52251L14.635 3.53626L4.64625 12.9713C4.4425 13.1586 4.27985 13.3862 4.16861 13.6397C4.05737 13.8932 3.99996 14.167 4 14.4438V26C4 26.5304 4.21071 27.0392 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0392 28 26.5304 28 26V14.4438C28 14.167 27.9426 13.8932 27.8314 13.6397C27.7201 13.3862 27.5575 13.1586 27.3538 12.9713ZM26 26H6V14.4438L6.01375 14.4313L16 5.00001L25.9875 14.4288L26.0012 14.4413L26 26Z"
        />
      </Svg>
    ),
  },
  {
    name: 'discover',
    href: '/discover',
    tabBarIcon: ({ animatedProps }: TabBarIconProps) => (
      <Svg>
        <AnimatedPath
          animatedProps={animatedProps}
          d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM21.5525 9.105L13.5525 13.105C13.3591 13.2022 13.2022 13.3591 13.105 13.5525L9.10501 21.5525C9.02869 21.705 8.99264 21.8745 9.0003 22.0449C9.00795 22.2153 9.05905 22.3808 9.14874 22.5259C9.23843 22.671 9.36373 22.7907 9.51272 22.8736C9.66172 22.9566 9.82946 23.0001 10 23C10.1552 22.9998 10.3084 22.9638 10.4475 22.895L18.4475 18.895C18.6409 18.7978 18.7979 18.6409 18.895 18.4475L22.895 10.4475C22.9894 10.2597 23.0222 10.0469 22.9887 9.83933C22.9552 9.6318 22.8572 9.4401 22.7085 9.29146C22.5599 9.14282 22.3682 9.0448 22.1607 9.01132C21.9531 8.97785 21.7403 9.01063 21.5525 9.105ZM17.25 17.25L12.2363 19.7638L14.75 14.75L19.7688 12.2413L17.25 17.25Z"
        />
      </Svg>
    ),
  },
  {
    name: 'game',
    href: '/game',
    tabBarIcon: ({ animatedProps }: TabBarIconProps) => (
      <Svg height={26} viewBox="0 0 21 20" width={26}>
        <G clip-path="url(#clip0_4088_57387)" id="Frame">
          <AnimatedPath
            animatedProps={animatedProps}
            d="M1.00003 9.16675H19.3334M1.00003 9.16675V18.3334H19.3334V9.16675M1.00003 9.16675V5.83341C1.00003 4.72835 1.43902 3.66854 2.22042 2.88714C3.00182 2.10573 4.06163 1.66675 5.1667 1.66675H15.1667C15.7139 1.66675 16.2557 1.77452 16.7612 1.98392C17.2667 2.19331 17.7261 2.50023 18.113 2.88714C18.4999 3.27405 18.8068 3.73338 19.0162 4.2389C19.2256 4.74442 19.3334 5.28624 19.3334 5.83341V9.16675M6.00003 1.66675V9.16675M14.3334 1.66675V9.16675"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <AnimatedPath
            animatedProps={animatedProps}
            d="M10.1667 10.8334V12.5001M6.83334 9.16675H13.5V14.1667H6.83334V9.16675Z"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </G>
      </Svg>
    ),
    tabBarBadge: 3,
  },
  // This route just for develop
  {
    name: 'showcase',
    href: '/showcase',
    tabBarIcon: ({ animatedProps }: TabBarIconProps) => (
      <Svg>
        <AnimatedPath
          animatedProps={animatedProps}
          d="M8.64001 11.7688L3.56251 16L8.64001 20.2313C8.74381 20.3144 8.83 20.4173 8.89353 20.5342C8.95707 20.651 8.99666 20.7793 9.01001 20.9116C9.02336 21.0439 9.01018 21.1775 8.97126 21.3047C8.93234 21.4318 8.86845 21.5499 8.78333 21.6521C8.69821 21.7542 8.59358 21.8384 8.47554 21.8996C8.35751 21.9609 8.22845 21.9979 8.09591 22.0087C7.96338 22.0194 7.83003 22.0036 7.70367 21.9622C7.57731 21.9208 7.46048 21.8546 7.36001 21.7675L1.36001 16.7675C1.24742 16.6737 1.15684 16.5562 1.09468 16.4235C1.03253 16.2908 1.00031 16.146 1.00031 15.9994C1.00031 15.8528 1.03253 15.7081 1.09468 15.5753C1.15684 15.4426 1.24742 15.3251 1.36001 15.2313L7.36001 10.2313C7.56389 10.0615 7.82685 9.97975 8.09104 10.0039C8.35524 10.028 8.59902 10.1561 8.76876 10.36C8.93849 10.5639 9.02029 10.8269 8.99614 11.0911C8.972 11.3553 8.84389 11.599 8.64001 11.7688ZM30.64 15.2313L24.64 10.2313C24.5391 10.1472 24.4225 10.0839 24.2971 10.0449C24.1717 10.0059 24.0398 9.99194 23.909 10.0039C23.7782 10.0159 23.651 10.0535 23.5347 10.1146C23.4184 10.1757 23.3153 10.2591 23.2313 10.36C23.0615 10.5639 22.9797 10.8269 23.0039 11.0911C23.028 11.3553 23.1561 11.599 23.36 11.7688L28.4375 16L23.36 20.2313C23.2562 20.3144 23.17 20.4173 23.1065 20.5342C23.0429 20.651 23.0033 20.7793 22.99 20.9116C22.9767 21.0439 22.9898 21.1775 23.0287 21.3047C23.0677 21.4318 23.1316 21.5499 23.2167 21.6521C23.3018 21.7542 23.4064 21.8384 23.5245 21.8996C23.6425 21.9609 23.7716 21.9979 23.9041 22.0087C24.0366 22.0194 24.17 22.0036 24.2963 21.9622C24.4227 21.9208 24.5395 21.8546 24.64 21.7675L30.64 16.7675C30.7526 16.6737 30.8432 16.5562 30.9053 16.4235C30.9675 16.2908 30.9997 16.146 30.9997 15.9994C30.9997 15.8528 30.9675 15.7081 30.9053 15.5753C30.8432 15.4426 30.7526 15.3251 30.64 15.2313ZM20.3413 4.06003C20.2178 4.01522 20.0868 3.99515 19.9556 4.00099C19.8244 4.00682 19.6956 4.03844 19.5766 4.09404C19.4576 4.14964 19.3508 4.22813 19.2621 4.32503C19.1735 4.42193 19.1048 4.53534 19.06 4.65878L11.06 26.6588C11.015 26.7823 10.9948 26.9135 11.0005 27.0448C11.0063 27.1761 11.0378 27.3051 11.0935 27.4242C11.1491 27.5433 11.2276 27.6503 11.3246 27.739C11.4216 27.8277 11.5352 27.8965 11.6588 27.9413C11.7683 27.9802 11.8837 28.0001 12 28C12.2054 28 12.4058 27.9368 12.5739 27.819C12.7421 27.7011 12.8699 27.5343 12.94 27.3413L20.94 5.34128C20.9848 5.21784 21.0049 5.08678 20.9991 4.95558C20.9932 4.82439 20.9616 4.69562 20.906 4.57665C20.8504 4.45767 20.7719 4.35081 20.675 4.26217C20.5781 4.17353 20.4647 4.10484 20.3413 4.06003Z"
        />
      </Svg>
    ),
  },
];

export default function TabLayout() {
  const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderTabBar}
    >
      {tabBars.map(({ name, href, tabBarIcon, tabBarBadge }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            href,
            tabBarLabel: name,
            tabBarIcon,
            tabBarBadge,
            lazy: true,
          }}
        />
      ))}
    </Tabs>
  );
}
