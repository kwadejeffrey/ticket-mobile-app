import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { Text } from 'react-native';
import { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function TabsLaout() {
    const tabs = [
        {
            showFor: [],
            name: "(events)",
            displayName: "Events",
            icon: "calendar",
            // href: "./events",
            options: {
                showHeader: false
            }
        },
        {
            showFor: [],
            name: "(tickets)",
            displayName: "My Tickets",
            icon: "ticket",
            // href: "./events",
            options: {
                showHeader: false
            }
        },
        {
            showFor: [],
            name: "scan-tickets",
            displayName: "Scan Tickets",
            icon: "scan",
            // href: "./events",
            options: {
                showHeader: true
            }
        },
        {
            showFor: [],
            name: "settings",
            displayName: "Settings",
            icon: "cog",
            // href: "./events",
            options: {
                showHeader: true
            }
        }
    ];

    return (
        <Tabs>
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        ...tab.options, title: tab.displayName, tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? "black" : "gray" }}>
                                {tab.displayName}
                            </Text>
                        ), tabBarIcon: ({ focused }) => (
                            <TabBarIcon name={tab.icon as ComponentProps<typeof Ionicons>['name']}
                                color={focused ? 'black' : "gray"}>

                            </TabBarIcon>
                        )
                    }}
                // href={tab.href}
                // tabBarIcon={tab.icon}

                />
            ))}
        </Tabs>
    )
}