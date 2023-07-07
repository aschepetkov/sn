import c from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
    return (
        <div>
            {/*<div className={c.image}>*/}
            {/*    <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700386379.jpg" />*/}
            {/*</div>*/}

            <h1>Мой профиль</h1>

            <div className={c.avatar}>
                <div className={c.avatarImage}>
                    <img alt="" src="https://yandex-images.clstorage.net/djQ5A5104/87de58p3IV/PwX_sTtbiQ2p7WWbKyN1jyufIZAjFbi1TX2coaQNVpLyBHIQJF1RtWR08D6TeK9lfFfLqZXkPym9jmycoLk4ECwC6f1wGpVW-KhyzyMgcI02wmKBP0-86Fc_wP-1Dg-fpgQYdwB_d9xKF4xL4wW1ZnAKyOTfp3MU1c1Lma_ZOzYGDsCDAGzVGKf4Ao0_DEKrN-kttxxgtNlOfcriq08iyvFbMXgnUGzvfSucaOsso2VmBf7VkJxcH_i7SKu84TEfJxf8hD9t9wmo2RKKKThgiwDnAL0PUJbZXXLSwJFWF_LgcCtgB1VbwmQxv0PBOK1mfTjb94O8Qz_PvUu_ndspHzMIxpgYQM4jj_QAqBgLWZ40xjabFnem-XVQ0fOrfBvB0EYXTSRRX-JpBLF0wRGUc3kF-dWTglwnwatmt5XyByUKEvu6IGnpB5zRLqoTOmO_BcsJvTlPouBgdeTapk0k4NFzKHoIcn7VVCmhXusIjn1dJsTFp79RLNK4e5WG2AgACB76syBZwBOZ5x-mGiVZpTj1C4IQX7LzdHHR579XB-zObhdPEnpj4WAIsljdMqRPXx7MzIeUdBvEmViwjckTDi0i86MEZt44h98doCUXeogi0zedB1aS6HBK5MSHUjHV43ETWTh_XexpJKZk7SKYbH8e59qCklMt7aZOt534CxgLPeGBI3zuLr3kKaUCF1uJJeYYnQFfpMFsccTcl3Q518NtBVIGaGLiUxOwaOYbiXFMG9r6kqN3OdKIeL6Izyw8OTfBkT9k3iK-6j-zITxfjz_6Lb8idajka23owoJzI-zTYwVrLGhby0oyg2ndLadWWRvC_bqYVhLtjlqorOkyGA4p_r05XckCh_IYjhoqV6km8we_M3aSxmJrzuG1YA3u0X4UYS5bUPtVKapZxQ2CUkYg78q5g2Qf4qBaiL_NGzssD_uGLGDlI7T2EYUfH3K-FNoFjwJAlsViSvDThkI" />
                </div>
                <div className="avatar-text">
                    <div className="avatar-name">Имя автора</div>
                </div>

            </div>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;
