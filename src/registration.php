<?php declare(strict_types=1);
/**
 * Copyright © W. Poortman - Magewire 2021-present.
 *
 * Please read the README and LICENSE files for more
 * details on copyrights and license information.
 */

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    'Magewirephp_MagewireRequireJs',
    __DIR__
);
