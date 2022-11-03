@props(['url'])
    <tr>
        <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
        @if (trim($slot) === 'Laravel')
        <img src="https://bernardsapida.herokuapp.com/images/Logo/bs.jpg" class="logo" alt="Bernard Sapida Logo">
        @else
        {{ $slot }}
        @endif
        </a>
    </td>
</tr>
