import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AuthContext from '../context/AuthContext';

export default () => {

    const router = useRouter();

    const isHome = router.pathname === "/";
    const goBack = (event) => {
        event.preventDefault();
        router.back();
    }

    const { user } = useContext(AuthContext);

    return(
        <div>
            <header>
                {!isHome && <a href="#" onClick={goBack}>{"<"} back</a>}
                <Link href="/">
                    <a>
                        <h2>Conrad Trost</h2>
                    </a>
                </Link>
            {user ? (
            <Link href="/account">
                <a>{user.email}</a>
            </Link>
            ) : (
                <Link href="/login"><a>Log in</a></Link>
            )}
            </header>
        </div>
    )
}