// 缇庡洟澶栧崠绾㈠寘閰嶇疆鏂囦欢
// 鑷姩鐢熸垚鏃堕棿锛?${new Date().toLocaleString()}

const siteConfig = {
    siteTitle: "缇庡洟澶栧崠绾㈠寘",
    bgColor: "#FFD700",
    header: {
        enabled: true,
        logoUrl: "",
        text: "缇庡洟",
        textColor: "#FF6B00",
        fontSize: "24px",
        fontWeight: "bold",
        align: "center",
        logoPosition: "left",
        logoSize: "40px"
    },
    carousel: [
        {
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
            title: "鍝佽川澶栧崠",
            subtitle: "绮鹃?夊晢瀹?5鎶樿捣",
            link: "https://meituan.com"
        },
        {
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop",
            title: "瓒呭?间紭鎯?",
            subtitle: "鏂颁汉涓撲韩澶хぜ鍖?",
            link: "https://meituan.com"
        }
    ],
    stepsType: "text",
    stepsText: "鍏堥鍒? 鈫? 鍐嶄笅鍗? 鈫? 浜紭鎯?",
    stepsColor: "#FF6B00",
    mainButton: {
        text: "棰嗙孩鍖呯偣澶栧崠鈶?",
        color: "linear-gradient(135deg, #FF6B00, #FF9800)",
        textColor: "#FFFFFF",
        link: "https://meituan.com"
    },
    subButtonsEnabled: true,
    subButtons: {
        button1: {
            text: "鍝佽川浼氬満(鏂?)",
            desc: "绮鹃?夊晢瀹?5鎶樿捣",
            link: "https://meituan.com"
        },
        button2: {
            text: "瓒呭?煎埜鍖?",
            desc: "澶氬紶浼樻儬鍒哥粍鍚?",
            link: "https://meituan.com"
        }
    },
    imageButtonsEnabled: true,
    imageButtons: [
        {
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop",
            text: "鍏嶈垂棰嗗彇",
            link: "https://meituan.com"
        },
        {
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&auto=format&fit=crop",
            text: "鍏嶈垂棰嗗彇",
            link: "https://meituan.com"
        },
        {
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop",
            text: "鍏嶈垂棰嗗彇",
            link: "https://meituan.com"
        }
    ],
    tips: [
        "1. 鍏堥瀹屼笂鏂规墍鏈夌殑鍒革紝棰嗗畬鍚庤繑鍥炴椤甸潰锛岀偣鍑诲搴旀寜閽嵆鍙娇鐢ㄥ埜銆?",
        "2. 鏀惰揣浜烘墜鏈哄彿鍜岀櫥褰曟墜鏈哄彿蹇呴』涓?鑷存墠鍙敤鍒搞??",
        "3. 缇庡洟涓?澶╁彲棰?3娆★紝楗夸簡涔堝彲浠ラ涓や釜绾㈠寘銆?",
        "4. 浼樻儬鍒告湁鏁堟湡浠ラ鍙栨椂鏄剧ず涓哄噯銆?"
    ]
};

// 瀵煎嚭閰嶇疆
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
