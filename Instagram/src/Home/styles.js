import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    gap: 12,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    marginTop: 44,
    maxHeight: 56,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logoHeader: {
    height: 50,
    objectFit: "contain",
    width: 124,
  },
  headerNav: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
  },
  iconMenu: {
    height: 24,
    objectFit: "contain",
    width: 24,
  },
  containerStories: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    height: 84,
    paddingLeft: 4,
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
    borderRadius: "100%",
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
    gap: 16,
  },
  PostSave: {
    marginRight: 8,
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
