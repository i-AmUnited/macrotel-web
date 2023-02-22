const ProfileCard = ({profile, firstName, lastName, role}) => {
  return (
    <div className="bg-white rounded-t-md overflow-hidden">
      <img src={profile} alt="" className="h-[200px] object-cover w-full" />
      <div className="p-5">
        <p className="text-sm mb-2 flex gap-2">
          <span className="opacity-40 font-bold">{lastName}</span>
          <span className="opacity-100 font-normal">{firstName}</span>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xs">{role}</p>
          <div className="opacity-30 hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
