import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        gap: 12,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        maxHeight: 56,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 44,
    },
    logoHeader: {
        objectFit: "contain",
        width: 124,
        height: 50,
    },
    headerNav: {
        flex: 1,
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    iconMenu: {
        objectFit: "contain",
        width: 24,
        height: 24,
    },
    // Stories
    containerStories: {
        height: 102,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingLeft: 4,
    },
    containerStory: {
        padding: 3.5,
        alignItems: "center",
        gap: 5,
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        height: "100%",
        borderRadius: 50,
    },
    story: {
        objectFit: "contain",
        width: 88,
        height: 88,
        borderRadius: 50,
        border: "solid",
        borderColor: "#fff",
        borderWidth: 2,
    },
    containerStoryAdd: {
        position: "absolute",
        right: 4,
        bottom: 24,
        zIndex: 1,
        width: 28,
        height: 28,
        borderRadius: 50,
        border: "solid",
        borderColor: "#fff",
        borderWidth: 2,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
    },
    storyAdd: {
        objectFit: "contain",
        width: 18,
        height: 18,
    },
    containerFeedHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: 8,
    },
    userContainer: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    userFeed: {
        objectFit: "contain",
        width: 36,
        height: 36,
        borderRadius: 50,
    },
    userName: {
        fontSize: 14,
        fontWeight: "bold",
    },
    more: {
        objectFit: "contain",
        width: 28,
        height: 28,
    },
    feed: {
        width: "100%",
        height: 400,
        objectFit: "cover",
    },
    containerFeedFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
    },
    FooterAction: {
        flexDirection: "row",
        gap: 16
    },
    PostSave: {
        marginRight: 8
    },
    PostInfo: {
        marginTop: 4,
        paddingHorizontal: 8,
    },
    PostText: {
        fontSize: 16,
    },
    containerActionBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 28,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
});

export default styles