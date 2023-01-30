import './Login.css';
import Button from '../../components/Button';

function Login() {
  return (
    <div>
       <div class="container">

<div class="flow">
    <h2>Join our community</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ducimus laudantium, harum asperiores ipsam quo tempora modi,<br/> consequatur dolorum natus iure, velit eos. Obcaecati perspiciatis rem nam aliquid temporibus molestias dolorem delectus quam tempora eius. <br/> Minus laudantium repellat nisi obcaecati voluptas delectus, reiciendis officiis placeat reprehenderit consequatur adipisci vel atque? </p>
</div>

<div class="drake">
    <h3>Monthly Subscription</h3>
    <h1>$29</h1>
    <span>per month</span>
    <h4>Full access for less than $1 a day</h4>
    <Button text="LOGIN"/>
</div>

<div class="jam">
    <h3>Why Us</h3>
    <ul>
        <li>Tutorial by industry experts</li>
        <li>Peer and expertcode review</li>
        <li>Coding exercise</li>
        <li>Access to our Github repos</li>
        <li>Community forum</li>
        <li>Flashcard decks</li>
        <li>New video every week</li>
    </ul>
</div>
</div>
    </div>
  );
}

export default Login;
