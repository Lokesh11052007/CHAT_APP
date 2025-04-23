import { X} from "lucide-react"
import { useAuthStore } from '../store/useAuthStore'
import { useChatStore } from '../store/useChatStore'
const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2 border-b border-base-300">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                {/* Avataer */}
                <div className="avatar">
                    <div className="size-10 rounded-full relative">
                        <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
                    </div>
                </div>

                {/* UserInfo */}
                <div >
                    <h3 className="font-medium">{selectedUser.fullName}</h3>
                    <p>
                        {onlineUsers.includes(selectedUser._id)? "Online": "Offline"}
                    </p>
                </div>
            </div>
            {/* Close Button */}
            <button onClick={() => setSelectedUser(null)}>
                <X />
            </button>
        </div>
    </div>
  );
};

export default ChatHeader